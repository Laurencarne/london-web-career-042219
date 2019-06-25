Rails.application.routes.draw do
  resources :cars
  resources :brands
  resources :mechanics
  resources :owners
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
