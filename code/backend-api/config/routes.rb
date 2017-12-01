# Name: Aaron Weiss
# Course: CSC-415
# Semester: Fall 2017
# Instructor: Dr. Pulimood
# Project Name: TCNJ-Speaks
# Project Description: Bring awareness to community about relevant social justice issues.
# File Name: routes.rb
# File Description: Defines routes for RESTful API access.
# Last Modified: 12/01/17 (m/d/y)

Rails.application.routes.draw do

  # Hierarchy of the system. Each issue has many upvotes and downvotes.
  #
  # Issue (INDEX, SHOW, CREATE, UPDATE, DESTROY)
  #   - Upvotes (CREATE, DESTROY)
  #   - Downvotes (CREATE, DESTROY)

  resources :issues do
      resources :upvotes, only: [:create, :destroy]
      resources :downvotes, only: [:create, :destroy]
  end

end
