class Stock < ApplicationRecord
    has_many :transactions
    has_many :users, through: :transactions
    
    def self.get_list
        client = IEX::Api::Client.new(
            publishable_token: 'pk_c7eb7595d98b47bc9c9e342330f5b81c',
            secret_token: 'sk_c5e94f4171f945c4af649d22ef697e9f',
            endpoint: 'https://cloud.iexapis.com/v1'
          )
        client.stock_market_list(:mostactive)
    end 
end
 