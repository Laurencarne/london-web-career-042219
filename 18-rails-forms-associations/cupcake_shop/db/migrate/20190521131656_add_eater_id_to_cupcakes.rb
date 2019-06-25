class AddEaterIdToCupcakes < ActiveRecord::Migration[5.2]
  def change
    add_column :cupcakes, :eater_id, :integer
  end
end
