# Name: Aaron Weiss
# Course: CSC-415
# Semester: Fall 2017
# Instructor: Dr. Pulimood
# Project Name: TCNJ-Speaks
# Project Description: Bring awareness to community about relevant social justice issues.
# File Name: issue.rb
# File Description: Model for Issue. Defines relationship to votes and validates fields.
# Last Modified: 12/01/17 (m/d/y)

class Issue < ApplicationRecord
  has_many :upvotes, dependent: :destroy
  has_many :downvotes, dependent: :destroy

  validates :title, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true

  def score
    upvotes.count - downvotes.count
  end

end
