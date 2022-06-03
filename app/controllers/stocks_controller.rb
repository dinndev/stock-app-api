class StocksController < ApplicationController
before_action :authenticate_user!
 def index
   @stocks = Stock.get_list
   render json: @stocks, status: :ok
 end

end
