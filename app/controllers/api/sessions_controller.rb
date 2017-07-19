class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    ) || User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render :show
    else
      #errors
    end
  end

  def show
    @user = current_user
  end

  def destroy
    logout!
    render :new
  end
end
