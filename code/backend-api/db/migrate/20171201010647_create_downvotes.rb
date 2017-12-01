# Name: Aaron Weiss
# Course: CSC-415
# Semester: Fall 2017
# Instructor: Dr. Pulimood
# Project Name: TCNJ-Speaks
# Project Description: Bring awareness to community about relevant social justice issues.
# File Name: 20171201010647_create_downvotes.rb
# File Description: Migration schema for rails to generate database tables for downvotes.
# Last Modified: 12/01/17 (m/d/y)

class CreateDownvotes < ActiveRecord::Migration[5.1]
  def change
    create_table :downvotes do |t|
      t.references :issue, foreign_key: true

      t.timestamps
    end
  end
end
