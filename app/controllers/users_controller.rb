class UsersController < ApplicationController
    before_action :authenticate_user!
    before_action :is_admin, only: [:user_lists :edit, :index, :pending_traders, :show_all_transactions, :create_user, :approve_user]

    def portfolio
      stocks = current_user.stocks
      render json: stocks, status: :ok, message: "stocks lists "
    end

    def create_user
      user = User.new(user_params)
      if user.save
        render json: user, status: :ok, message: "User created"
      else
        render  status: 400, message: "Something went wrong"
      end
    end

    def user_lists
        users = User.all
        render json: users, status: :ok, message: "Users"
    end

    def edit
        user = User.find(params[:id])
    end

    def update
     if user.update(user_params)
        render  status: :ok, message: "User updated"
     else
        render  status: 400, message: "Something went wrong"
     end
    end

    def show_all_transactions
     transactions = Transaction.all
     render json: transactions, status: :ok, message: "stocks lists "
    end        

    def pending_traders
     users = User.where(approved: false)
     render json: users, status: :ok, message: "stocks lists "
    end

    def approve_user(user_id)
      user = User.find(user_id)
      if user.update(approved: true)
      render json: user, status: :ok, message: "User approved"
      else 
        render status: 400, message: "Something went wrong"

      end
  end
    
    private
    def is_admin
      if !current_user.admin?
        render status: 401, message: "can't access"
      end
    end

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
