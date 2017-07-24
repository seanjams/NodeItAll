class Api::AnswersController < ApplicationController

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      render :show
    else
      if logged_in?
        render(
          json: ["Can't Process That Which IS NOT PROCESSIBLE"],
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
  end

  def show
    @answer = Answer.find_by(id: params[:id])
  end

  def update
    @answer = Answer.find_by(id: params[:id])
    if @answer.update_attributes(answer_params)
      render :show
    else
      #errors
    end
  end

  def destroy
    Answer.delete(params[:id])
    render :index
  end

  private

  def answer_params
    params.require(:answer).permit(:body, :question_id, :author_id)
  end

end
