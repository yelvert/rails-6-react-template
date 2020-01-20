# frozen_string_literal: true

class Api::CurrentUserController < Api::ApplicationController

  def index
    render json: current_user
  end

end
