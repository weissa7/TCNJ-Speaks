# Name: Aaron Weiss
# Course: CSC-415
# Semester: Fall 2017
# Instructor: Dr. Pulimood
# Project Name: TCNJ-Speaks
# Project Description: Bring awareness to community about relevant social justice issues.
# File Name: issues_controller.rb
# File Description: Controller for issues. Allows for RESTful API calls.
# Last Modified: 12/01/17 (m/d/y)


class IssuesController < ApplicationController
  before_action :set_issue, only: [:show, :update, :destroy]

  # GET /issues
  def index
    # *********
    # Known Bug
    # *********
    # Sorting the issues on the backend side is a BAD practice.
    # This causes inconsistencies in colorings of graphed issues and is not very RESTful.
    # Bug will be fixed if this sort occurs on the frontend.
    #
    @issues = Issue.all.sort_by { |d| d.score}.reverse!

    #render json: @issues
    render :json => @issues.to_json(:include => [:upvotes, :downvotes])
  end

  # GET /issues/1
  def show
    render json: @issue
  end

  # POST /issues
  def create
    @issue = Issue.new(issue_params)

    if @issue.save
      render json: @issue, status: :created, location: @issue
    else
      render json: @issue.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /issues/1
  def update
    if @issue.update(issue_params)
      render json: @issue
    else
      render json: @issue.errors, status: :unprocessable_entity
    end
  end

  # DELETE /issues/1
  def destroy
    @issue.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_issue
      @issue = Issue.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def issue_params
      params.require(:issue).permit(:title, :description)
    end
end
