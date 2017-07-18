class Api::UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.save
      render :show
    else
      #errors
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      #errors
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
