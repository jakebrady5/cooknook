class CreateIngredientUses < ActiveRecord::Migration
  def change
    create_table :ingredient_uses do |t|
      t.string :quantity

      t.timestamps null: false
    end
  end
end
