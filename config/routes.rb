Rails.application.routes.draw do
  resources :teams do
    resources :players
    resources :star_players
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
