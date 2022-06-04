class TransactionsController < ApplicationController
    def buy
       user = User.find(params[:user])
       stock = Stock.find_by(ticker: params[:stock])
       transaction = Transaction.new(user: user, stock: stock, mode: params[:mode], price: params[:price])

       if current_user.wallet > stock.price
            transaction.save
            render json: transaction, status: :ok, message: "Success"
       else
            render json: transaction, status: :ok, message: "insufficient vaance" 
       end
    end

    def sell 
        
    end

    def transaction_params
        params.require(:transaction).permit(:user, :name, :mode, :price, :ticker)
    end
end
