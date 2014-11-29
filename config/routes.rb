Rails.application.routes.draw do
  root 'static_pages#home'

  devise_for :users, controllers: { registrations: 'registrations' } 

  resources :topics do
    resources :questions
  end 

  resources :questions
end
