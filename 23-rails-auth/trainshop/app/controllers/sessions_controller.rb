class SessionsController < ApplicationController

  def new 
  end

  def create 
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to user
    else
      flash[:errors] = ['credentials do not match our db records']
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to trains_path
  end

  private
  # def user_params
  #   params.require(:user).permit(:username, :password)
  # end
end
