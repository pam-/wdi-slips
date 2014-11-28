Rails.application.routes.draw do
  root 'topics#index'

  devise_for :users  

  resources :topics do
    resources :questions
  end 

  resources :questions
end
