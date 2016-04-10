class Recipe < ActiveRecord::Base
  has_many :comments
  has_many :user_recipes, dependent: :destroy
  belongs_to :user
end
