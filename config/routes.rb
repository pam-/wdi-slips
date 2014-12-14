Rails.application.routes.draw do
  root 'static_pages#home'

  devise_for :users, controllers: { registrations: 'registrations' } 

  resources :topics do
    resources :objectives
  end 

  resources :tags
  resources :questions
  resources :students, only: [:index]

  get '/slips', to: 'objectives#slips'
end
