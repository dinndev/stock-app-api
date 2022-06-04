class AddPriceToStocks < ActiveRecord::Migration[7.0]
  def change
    add_column :stocks, :price, :integer
  end
end
