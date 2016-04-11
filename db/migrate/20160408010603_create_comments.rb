class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :recipe_id
      t.integer :user_id
      t.string :username

      t.timestamps null: false
    end
  end
end
