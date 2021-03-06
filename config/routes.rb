Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resources :questions, only: [:create, :index, :show, :update, :destroy] do
      resources :votes, only: [:create]
    end
    resources :answers, only: [:create, :index, :show, :update, :destroy] do
      resources :votes, only: [:create]
    end
    resources :votes, only: [:index, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
