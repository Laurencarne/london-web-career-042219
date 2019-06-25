Rails.application.routes.draw do
  resources :dogs
  resources :employees
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/adoption_dogs", to: "dogs#adoption_dogs", as: "adoption_dogs"
  get "/adoption_form/:id", to: "dogs#adoption_form", as: "adoption_form"
  post "/adopt_dog", to: "dogs#adopt_dog", as: "adopt_dog"
end
