# frozen_string_literal: true

class Api::ApplicationController < ApplicationController
  self.responder = Api::ApplicationResponder
  respond_to :json

end
