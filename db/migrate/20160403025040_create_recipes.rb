class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :instructions
      t.text :ingredients
      t.integer :user_id
      t.integer :duration, default: 0

      t.timestamps null: false
    end
  end
end
