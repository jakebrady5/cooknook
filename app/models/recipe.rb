class Recipe < ActiveRecord::Base
  has_many :ingredient_uses
  has_many :ingredients, through: :ingredient_uses
end
