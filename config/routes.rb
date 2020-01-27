Rails.application.routes.draw do
  scope '/api' do

    post "teams/show", to: 'teams#show'
    post "teams/:team_id/players/show", to: 'players#show'

    resources :teams do
      resources :players
      resources :star_players
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
