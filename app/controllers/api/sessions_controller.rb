class Api::SessionsController < ApplicationController

  def create
    username_or_email = params[:user][:username] || params[:user][:email]
    @user = User.find_by_credentials(
      username_or_email,
      params[:user][:password]
    )
    if @user
      login(@user)
      render api_user_url(@user)
    else
      #render errors
    end
  end

  def show
    @user = current_user
  end

  def destroy
    logout!
    render root_url
  end
end
