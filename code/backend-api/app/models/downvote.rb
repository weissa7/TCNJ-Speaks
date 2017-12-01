# Name: Aaron Weiss
# Course: CSC-415
# Semester: Fall 2017
# Instructor: Dr. Pulimood
# Project Name: TCNJ-Speaks
# Project Description: Bring awareness to community about relevant social justice issues.
# File Name: downvote.rb
# File Description: Model for Downvote. Defines relationship to issue.
# Last Modified: 12/01/17 (m/d/y)

class Downvote < ApplicationRecord
  belongs_to :issue
end
