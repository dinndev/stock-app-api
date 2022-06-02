class AddNameToStocks < ActiveRecord::Migration[7.0]
  def change
    add_column :stocks, :name, :string
  end
end
