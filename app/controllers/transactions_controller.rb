class TransactionsController < ApplicationController

    def buy
        user = User.find(params[:user])
        stock = Stock.find_by(ticker: params[:stock])
       transaction = Transaction.new(user: user, stock: stock, mode: params[:mode], price: params[:price], name: params[:name])
       afford = user.wallet >= stock.price

       if afford
        #   update user wallet
            user.update(wallet: user.wallet - stock.price)
            transaction.save
            render json: transaction, status: :ok, message: "Success"
       else
            render json: transaction, status: 401, message: "insufficient balance" 
       end
    end

    def sell
        user = User.find(params[:user])
        stock = Stock.find_by(ticker: params[:stock])
        transaction = Transaction.where(user_id: user.id, stock_id: stock.id).first
        user.update(wallet: user.wallet + stock.price)
         user_stocks = user.stocks
        if transaction.destroy
            render json: user_stocks, status: :ok, message: "Success"
        else
            render json: transaction, status: 401, message: "something went wrong" 
        end
    end

   private


    def transaction_params
        params.require(:transaction).permit(:user, :name, :mode, :price, :ticker)
    end

    
end
