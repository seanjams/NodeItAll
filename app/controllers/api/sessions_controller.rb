class Api::SessionsController < ApplicationController

  def create
    # debugger
    username_or_email = params[:user][:username] || params[:user][:email]
    @user = User.find_by_credentials(
      username_or_email,
      params[:user][:password]
    )
    if @user
      login(@user)
      render :show
    else
      #render errors
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
