Rails.application.routes.draw do

  # Hierarchy of the system. Each issue has many upvotes and downvotes.
  #
  # Issue (INDEX, SHOW, CREATE, UPDATE, DESTROY)
  #   - Upvotes (CREATE, DESTROY)
  #   - Downvotes (CREATE, DESTROY)
  #
  resources :issues do
      resources :upvotes, only: [:create, :destroy]
      resources :downvotes, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
