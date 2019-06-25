Rails.application.routes.draw do
  resources :trains

  # signup and user db mgmt
  resources :users, only: [:create, :show]

  # signup
  get "signup", to: "users#new", as: "signup"

  # sessions mgmt

  # sessions#new
  get "login", to: "sessions#new", as: "login"
  # sessions#create
  post "sessions", to: "sessions#create", as: "sessions"
  # logout
  delete "sessions", to: "sessions#destroy"

end
