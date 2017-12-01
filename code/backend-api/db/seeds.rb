# Name: Aaron Weiss
# Course: CSC-415
# Semester: Fall 2017
# Instructor: Dr. Pulimood
# Project Name: TCNJ-Speaks
# Project Description: Bring awareness to community about relevant social justice issues.
# File Name: 20171201010647_create_downvotes.rb
# File Description: Prep database with default values.
# Last Modified: 12/01/17 (m/d/y)
#
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Issue.create!([
                  {title: 'Issue 1', description: 'Description 1'},
                  {title: 'Issue 2', description: 'Description 2'}
              ])
