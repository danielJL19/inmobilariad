class ChangeNameToTableToProducts < ActiveRecord::Migration[7.0]
  def change
    change_column :products, :room, :integer, using: 'room::integer'
  
  end
end
