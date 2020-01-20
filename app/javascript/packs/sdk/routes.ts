import _ from 'lodash'

export function route (path, params = {}) {
  return _.reduce(
    params,
    (p, value, key) => p.replace(new RegExp(`\\(?(\\/?):${key}\\)?`), `$1${value}`),
    path
  )
}

// The actual routes are generated, see lib/tasks/generate_sdk_routes_file.rake
// BEGIN ROUTES
export const current_user_path = "/api/users/current"
export const sign_out_path = "/users/sign_out"

export default {
  current_user_path,
  sign_out_path,
}
// END ROUTES
