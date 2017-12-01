# Name: Aaron Weiss
# Course: CSC-415
# Semester: Fall 2017
# Instructor: Dr. Pulimood
# Project Name: TCNJ-Speaks
# Project Description: Bring awareness to community about relevant social justice issues.
# File Name: downvotes_controller.rb
# File Description: Controller for downvotes. Allows for RESTful API calls.
# Last Modified: 12/01/17 (m/d/y)

class DownvotesController < ApplicationController
  def create
    @downvote = Downvote.new()
    @downvote.issue = Issue.find(params[:issue_id])
    if @downvote.save
    end
  end

  def destroy
  end

end
