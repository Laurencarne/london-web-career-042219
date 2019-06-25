class CreateOwnersTableAndAddOwnerIdToDogsTable < ActiveRecord::Migration
  def change
    create_table :owners do |t|
      t.string :name
    end

    add_column :dogs, :owner_id, :integer
  end
end
