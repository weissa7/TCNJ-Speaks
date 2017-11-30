class Vote < ApplicationRecord
  belongs_to :vote_manager, dependent: :destroy
  validates :value, numericality: { only_integer: true, greater_than_or_equal_to: -1, less_than_or_equal_to: 1 }


  #after_create :update_vote_manager_vote_sum, :update_vote_manager_total_votes

  #def update_vote_manager_vote_sum
  #  new_sum = self.vote_manager.vote_sum + self.value
  #  self.vote_manager.update_attribute(:vote_sum, new_sum)
  #end

  #def update_vote_manager_total_votes
  #  self.vote_manager.increment(:total_votes, by = 1)
  #end
end
