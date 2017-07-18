Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resources :questions, only: [:create, :index, :show, :update, :destroy]
    resources :answers, only: [:create, :index, :show, :update, :destroy] do
      resources :votes, only: [:create]
    end
    resources :votes, only: [:show, :update]
    resource :session, only: [:create, :destroy]
  end
end
