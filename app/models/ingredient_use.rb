class IngredientUse < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :shopping_list
  belongs_to :ingredient
end
