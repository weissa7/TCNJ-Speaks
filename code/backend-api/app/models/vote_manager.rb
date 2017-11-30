class VoteManager < ApplicationRecord
  belongs_to :issue, dependent: :destroy
  has_many :votes
  accepts_nested_attributes_for :votes
  
end
