class StocksController < ApplicationController
before_action :authenticate_user!
 def stock_list
   @stocks = Stock.all
   render json: @stocks, status: :ok
 end

end
