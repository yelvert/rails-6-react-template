# frozen_string_literal: true

if defined?(::Rails::Generators)

  module Generators
    module FrozenStringLiteralComment

      module InstanceMethods

        def add_frozen_string_literal_comment(dist)
          return unless dist && File.exist?(dist) && File.extname(dist) == '.rb'
          File.open(dist, 'r') do |f|
            body = f.read

            File.open(dist, 'w') do |new_f|
              new_f.write("# frozen_string_literal: true\n\n" + body)
            end
          end
        end

      end

      module GeneratorPrepend
        include InstanceMethods

        def invoke!
          res = super
          add_frozen_string_literal_comment(existing_migration)
          res
        end

      end

      module FilePrepend
        include InstanceMethods

        def create_file(file, *args)
          res = super
          add_frozen_string_literal_comment(file)
          res
        end

      end

      require 'rails/generators'
      require 'rails/generators/migration'
      Rails::Generators::Actions::CreateMigration.prepend GeneratorPrepend
      Rails::Generators::NamedBase.prepend FilePrepend

    end
  end

end
