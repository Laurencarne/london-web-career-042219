class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.references :owner, foreign_key: true
      t.integer :brand_id
      t.integer :mechanic_id

      t.timestamps
    end
  end
end
