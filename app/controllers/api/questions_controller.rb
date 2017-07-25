class Api::QuestionsController < ApplicationController

  def create
    @question = Question.new(question_params)
    if @question.save
      current_user
      render :show
    else
      if logged_in?
        render(
          json: @question.errors.full_messages,
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
    @questions = Question.includes(:votes).all
    current_user
  end

  def show
    @question ||= Question.find_by(id: params[:id])
    current_user
  end

  def update
    @question = Question.find_by(id: params[:id])
    if @question.update_attributes(question_params)
      current_user
      render :show
    else
      if logged_in?
        render(
          json: @question.errors.full_messages,
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
