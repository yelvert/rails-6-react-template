# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    get '/users/current', to: 'current_user#index', as: :current_user
  end

  get '/ui(*path)', to: 'ui#app'
  devise_for :users
  root to: redirect('/ui')
end
