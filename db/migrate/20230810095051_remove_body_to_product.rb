class RemoveBodyToProduct < ActiveRecord::Migration[7.0]
  def change
    change_table :products do |t|
      t.remove :body
    end
  end
end
