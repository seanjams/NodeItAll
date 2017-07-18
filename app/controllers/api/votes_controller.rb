class Api::VotesController < ApplicationController
  def create
    #may have error trying to create post, check params for vote_id
    @vote = Vote.create(vote_params)
    if @vote.save
      render :show
    else
      #errors
    end
  end

  def show
    @vote = Vote.find_by(id: params[:id])
  end

  def update
    @vote = Vote.find_by(id: params[:id])
    if @vote.update_attributes(vote_params)
      render :show
    else
      #errors
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:upvote, :answer_id, :user_id)
  end
end
