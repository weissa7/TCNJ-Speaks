class Issue < ApplicationRecord
  has_many :upvotes, dependent: :destroy

  validates :title, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true

  def score
    upvotes.count
  end

end
