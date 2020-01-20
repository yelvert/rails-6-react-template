task generate_sdk_routes_file: :environment do
  all_routes = Rails.
    application.
    routes.
    routes.
    reject(&:internal).
    select(&:name).
    each_with_object({}) {|x,o| o[x.name.to_sym] = x.path.spec.to_s.remove(/\(\.:format\)$/) }

  routes = {
    current_user_path: :api_current_user,
    sign_out_path: :destroy_user_session,
  }

  file = Rails.root.join('app', 'javascript', 'packs', 'sdk', 'routes.ts')
  content = File.read(file)
  route_vars = []
  routes_lines = []
  routes.each do |name, path|
    route_vars << name.to_s+','
    routes_lines << "export const #{ name } = \"#{all_routes[path]}\""
  end
  routes_content = <<~JS

    #{routes_lines.join("\n")}

    export default {
    #{route_vars.join("\n").indent(2)}
    }
  JS

  start_tag = "^// BEGIN ROUTES$"
  end_tag = "^// END ROUTES$"
  regex = Regexp.new("(?<=#{start_tag}).*(?=#{end_tag})", Regexp::MULTILINE)
  content = content.sub(regex, routes_content)
  File.write(file, content)
end