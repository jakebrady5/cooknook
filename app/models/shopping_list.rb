class ShoppingList < ActiveRecord::Base
  has_many :ingredient_uses
end
