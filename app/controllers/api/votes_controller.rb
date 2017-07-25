class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user.id
    if @vote.save
      render :show
    else
      if logged_in?
        render(
          json: @vote.errors.full_messages,
          status: 422
        )
      else
        render(
          json: ["Must be logged in"],
          status: 402
        )
      end
    end
  end

  def show
    @vote = Vote.find_by(id: params[:id])
  end

  def index
    # get ready to switch to a where statement to filter
    @votes = Vote.all
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
    params.require(:vote).permit(:upvote, :item_id, :item_type, :user_id)
  end
end
