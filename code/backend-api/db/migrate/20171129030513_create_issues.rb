# Name: Aaron Weiss
# Course: CSC-415
# Semester: Fall 2017
# Instructor: Dr. Pulimood
# Project Name: TCNJ-Speaks
# Project Description: Bring awareness to community about relevant social justice issues.
# File Name: 20171129030513_create_issues.rb
# File Description: Migration schema for rails to generate database tables for issues.
# Last Modified: 12/01/17 (m/d/y)

class CreateIssues < ActiveRecord::Migration[5.1]
  def change
    create_table :issues do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
