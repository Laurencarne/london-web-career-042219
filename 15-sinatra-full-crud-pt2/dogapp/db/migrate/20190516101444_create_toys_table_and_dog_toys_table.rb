class CreateToysTableAndDogToysTable < ActiveRecord::Migration
  def change
    create_table :toys do |t|
      t.string :name
    end

    create_table :dog_toys do |t|
      t.integer :dog_id
      t.integer :toy_id
    end
  end
end
