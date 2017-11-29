class Issue < ApplicationRecord
  has_one :vote_manager
  has_many :votes, through: :vote_manager
end
