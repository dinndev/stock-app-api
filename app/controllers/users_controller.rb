class UsersController < ApplicationController
    before_action :authenticate_user!
    before_action :is_admin, only: [:user_lists, :edit, :index, :pending_traders, :show_all_transactions]

    def portfolio
      stocks = current_user.stocks
      render json: stocks, status: :ok, message: "stocks lists "
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
    
    private
    def is_admin
      if !current_user.admin?
        render status: 401, message: "can't access"
      end
    end

    def user_params
        params.require(:user).permit(:email)
    end
end
