class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user ? current_user.id : nil
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
    @votes = Vote.all
  end

  # def update
  #   @vote = Vote.find_by(id: params[:id])
  #   if @vote.update_attributes(vote_params)
  #     render :show
  #   else
  #     if logged_in?
  #       render(
  #         json: @vote.errors.full_messages,
  #         status: 422
  #       )
  #     else
  #       render(
  #         json: ["Must be logged in"],
  #         status: 402
  #       )
  #     end
  #   end
  # end

  def destroy
    @vote = Vote.find_by(id: params[:id])
    if @vote
      @vote.delete
      render :show
    else
      render(
        json: ["Can't Delete That Which Does Not Exist"],
        status: 404
      )
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:upvote, :item_id, :item_type, :user_id)
  end
end
