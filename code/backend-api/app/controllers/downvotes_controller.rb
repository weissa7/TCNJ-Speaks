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
