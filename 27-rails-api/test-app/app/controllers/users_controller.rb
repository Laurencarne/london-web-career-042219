class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users,
    except: [:password, :created_at, :updated_at],
    include: [
      {
        :comments => {
          except: [:user_id,  :created_at, :updated_at]
        }
      }
    ]
  end
end
