class Api::QuestionsController < ApplicationController

  def create
    @question = Question.new(question_params)
    if @question.save
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
    @questions = Question.all
  end

  def show
    @question ||= Question.find_by(id: params[:id])
  end

  def update
    @question = Question.find_by(id: params[:id])
    if @question.update_attributes(question_params)
      render :show
    else
      if logged_in?
        render(
          json: ["Can't Find That Which Does Not Exist"],
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
    @question = Question.find_by(id: params[:id])
    if @question
      @question.delete
      render :show
    else
      render(
        json: ["Can't Delete That Which Does Not Exist"],
        status: 404
      )
    end
  end

  private

  def question_params
    params.require(:question).permit(:title, :body, :author_id)
  end

end
