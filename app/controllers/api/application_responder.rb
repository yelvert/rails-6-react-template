# frozen_string_literal: true

class Api::ApplicationResponder < ActionController::Responder
  protected

  def api_behavior
    raise(MissingRenderer, format) unless has_renderer?
    if get?
      display resource
    elsif post?
      binding.pry
      display resource, status: :created, location: resource_location
    elsif put?
      display resource, statue: :ok
    else
      head :no_content
    end
  end

  def resource_location
    loc = super
    return loc if loc.size > 1
    controller.class.to_s.split('::')[0..-2].map(&:downcase).map(&:to_sym) << loc.first
  end

end
