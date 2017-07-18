class Api::AnswersController < ApplicationController

  def create
    @answer = Answer.create(answer_params)
  end

  def index
    @answers = Answer.all
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
