class Recipe < ActiveRecord::Base
  has_many :comments
  has_many :user_recipes
  belongs_to :user
end
