class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :instructions
      t.text :ingredients
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
