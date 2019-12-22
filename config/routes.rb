Rails.application.routes.draw do
  scope '/api' do
    get :teams, to: 'teams#index'
    get :search, to: 'teams#search'

    get :players, to: 'players#index'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
