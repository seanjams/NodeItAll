class Api::SessionController < ApplicationController

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

  def destroy
    logout!
    render api_questions_url
  end
end
