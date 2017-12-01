class Issue < ApplicationRecord
  has_many :upvotes, dependent: :destroy
  has_many :downvotes, dependent: :destroy

  validates :title, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true

  def score
    upvotes.count - downvotes.count
  end

end
