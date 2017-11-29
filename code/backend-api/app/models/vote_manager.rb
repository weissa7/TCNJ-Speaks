class VoteManager < ApplicationRecord
  belongs_to :issue
  has_many :votes
end
