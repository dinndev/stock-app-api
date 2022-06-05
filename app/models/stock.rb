class Stock < ApplicationRecord
    has_many :transactions
    has_many :users, through: :transactions
    validates :name, presence: true
    validates :price, presence: true

    def self.get_client
        client = IEX::Api::Client.new(
            publishable_token: 'pk_c7eb7595d98b47bc9c9e342330f5b81c',
            secret_token: 'sk_c5e94f4171f945c4af649d22ef697e9f',
            endpoint: 'https://cloud.iexapis.com/v1'
          )
        client
    end 

    def self.get_list
        client = get_client
        client.stock_market_list(:mostactive) 
    end 

    def get_quote(ticker)
        client = get_client
        quote = client.quote(ticker)
        quote
    end
    
    def self.save_lists

       get_list.map {|s| Stock.create(name: s['company_name'], price: s['latest_price'], ticker: s['symbol'])}
    end

end
 