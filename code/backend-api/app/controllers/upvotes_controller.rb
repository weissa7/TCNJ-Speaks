class UpvotesController < ApplicationController
  def create
    @upvote = Upvote.new()
    @upvote.issue = Issue.find(params[:issue_id])
    if @upvote.save
    end
  end

  def destroy
  end

  private

  def secure_params
    params.require(:upvote)
  end
end
