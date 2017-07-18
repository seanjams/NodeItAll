class Api::QuestionsController < ApplicationController

  def create
    @question = Question.create(question_params)
    if @question.save
      render :index
    else
      #errors
    end
  end

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find_by(id: params[:id])
  end

  def update
    @question = Question.find_by(id: params[:id])
    if @question.update_attributes(question_params)
      render :show
    else
      #errors
    end
  end

  def destroy
    Question.delete(params[:id])
    render :index
  end

  private

  def question_params
    params.require(:question).permit(:title, :body, :author_id)
  end

end
