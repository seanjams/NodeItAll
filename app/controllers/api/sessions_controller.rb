class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render :show
    else
      render(
        json: ["Invalid Username or Password"],
        status: 401
      )
    end
  end

  def show
    @user = current_user
  end

  def destroy
    if logged_in?
      logout!
      render :new
    else
      render(
        json: ["Nobody Signed In"],
        status: 401
      )
    end
  end
end
