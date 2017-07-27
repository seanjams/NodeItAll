class Api::AnswersController < ApplicationController

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      current_user
      render :show
    else
      if logged_in?
        render(
          json: @answer.errors.full_messages,
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

  def index
    @answers = Answer.where(question_id: params[:answer][:question_id])
    current_user
  end

  def show
    @answer = Answer.find_by(id: params[:id])
    current_user
  end

  def update
    @answer = Answer.find_by(id: params[:id])
    if @answer.update_attributes(answer_params)
      current_user
      render :show
    else
      if logged_in?
        render(
          json: @answer.errors.full_messages,
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

  def destroy
    @answer = Answer.find_by(id: params[:id])
    if @answer
      @answer.delete
      render :show
    else
      render(
        json: ["Can't Delete That Which Does Not Exist"],
        status: 404
      )
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:body, :question_id, :author_id)
  end

end
