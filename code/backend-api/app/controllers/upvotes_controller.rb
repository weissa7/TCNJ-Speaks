# Name: Aaron Weiss
# Course: CSC-415
# Semester: Fall 2017
# Instructor: Dr. Pulimood
# Project Name: TCNJ-Speaks
# Project Description: Bring awareness to community about relevant social justice issues.
# File Name: upvotes_controller.rb
# File Description: Controller for upvotes. Allows for RESTful API calls.
# Last Modified: 12/01/17 (m/d/y)

class UpvotesController < ApplicationController
  def create
    @upvote = Upvote.new()
    @upvote.issue = Issue.find(params[:issue_id])
    if @upvote.save
    end
  end

  def destroy
  end

end
