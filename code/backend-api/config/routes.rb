Rails.application.routes.draw do

  get 'downvotes/create'

  get 'downvotes/destroy'

  resources :issues do
      resources :upvotes, only: [:create, :destroy]
      resources :downvotes, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
