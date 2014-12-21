Rails.application.routes.draw do
  root 'static_pages#home'
  get '/home', to: 'static_pages#home'

  devise_for :users, controllers: { registrations: 'registrations' } 
  resources :users, only: [:show]

  resources :topics do
    resources :objectives
  end 

  resources :tags
  resources :questions
  resources :students, only: [:index]

  get '/slips', to: 'objectives#slips'
end
