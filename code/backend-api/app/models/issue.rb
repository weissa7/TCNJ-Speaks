class Issue < ApplicationRecord
  has_one :vote_manager
  accepts_nested_attributes_for :vote_manager
  has_many :votes, through: :vote_manager

  validates :title, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true

  before_create :add_vote_manager

  def add_vote_manager
    build_vote_manager()
    true
  end
end
