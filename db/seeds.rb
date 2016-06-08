User.create!([
  {email: "test@test.com", username: "anonymous tester", password: "password", encrypted_password: "$2a$10$DI9BN9Sz4wGtNEMrN0.n3OBixLtUGl21yNqatt37fLDxYXSBdPBxG", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 2, current_sign_in_at: "2016-06-08 17:05:02", last_sign_in_at: "2016-06-08 17:03:50", current_sign_in_ip: "::1", last_sign_in_ip: "::1"},
  {email: "jake@jake.com", username: "jake", password: "password",encrypted_password: "$2a$10$JO5flToli8VWwo3bEDqNruSeu8b/9cCK6qLpT.HIKS8eNpq.v6ksC", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 3, current_sign_in_at: "2016-06-08 17:13:34", last_sign_in_at: "2016-06-08 16:40:18", current_sign_in_ip: "::1", last_sign_in_ip: "::1"},
  {email: "judy@judy.com", username: "judy", password: "password",encrypted_password: "$2a$10$oIAQBz8QzipLP8wEa73FUeJks1ZLBPioUAFpPd5naU7Tk1jXocthG", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 2, current_sign_in_at: "2016-06-08 17:15:09", last_sign_in_at: "2016-06-08 16:40:29", current_sign_in_ip: "::1", last_sign_in_ip: "::1"}
])
Comment.create!([
  {body: "Tried it and loved it!", recipe_id: 3, user_id: nil, username: "anonymous tester"},
  {body: "Awesome, goes well with Sriracha!", recipe_id: 2, user_id: nil, username: "anonymous tester"},
  {body: "this should be a staple!", recipe_id: 4, user_id: nil, username: "jake"},
  {body: "awesome for a quick lunch", recipe_id: 5, user_id: nil, username: "jake"},
  {body: "my favorite! happy food", recipe_id: 6, user_id: nil, username: "judy"},
  {body: "doesn't everything?!", recipe_id: 2, user_id: nil, username: "judy"},
  {body: "so light and delicious!", recipe_id: 1, user_id: nil, username: "judy"}
])
Recipe.create!([
  {title: "Quinoa White Bean Salad", instructions: "While quinoa cooks, whisk together vinegar, olive oil and salt and pepper.   After quinoa cooks and is still warm, stir in vinaigrette, tomatoes, pesto and beans.", ingredients: "1/3 c. red wine vinegar\n1/2 c. extra virgin olive oil\nsalt and pepper to taste\n1 c. white quinoa cooked according to directions\n1/2 c. dried tomatoes, julienned\n2 T. pesto\n1 (15 oz.) can white beans (Navy or cannelini), drained and rinsed", user_id: 1, duration: 0},
  {title: "Sweet Potato Burritos", instructions: "Peel and dice sweet potatoes. Simmer over medium heat adding vegetable stock as needed for moisture.  Add diced bell pepper and cumin/paprika.  Allow to simmer with lid until soft.\n\nPreheat oven to 400.  Mix the cooked sweet potato and pepper into a bowl with the rinsed black beans.  Add mixture and cheese into the tortilla shells, and place in a large tray.  Bake 5 minutes.\n\nDice garlic, onion, and avocado to mix together for guacamole.  Serve on top of burritos when complete.", ingredients: "2 sweet potatoes\n1 red bell pepper\n8 tortilla wraps\n1 can black beans\n1 cup vegetable stock\n1 avocado\n1/4 cup mozzarella cheese\n2 cloves garlic\n1/2 onion\n2 tsp cumin\n1 tsp paprika\nhot sauce\npepitos", user_id: 1, duration: 0},
  {title: "Pizza Verde", instructions: "Preheat oven to 450.  Stretch out dough over floured pizza stone, and spread pesto sauce over surface.  Add chopped asparagus, summer squash, and onion, followed by shredded kale and a layer of mozzarella cheese.  Bake for 15 minutes.", ingredients: "Multi grain pizza dough\nPesto sauce\nMozzarella cheese\nAsparagus\nSummer squash\nKale\nOnion", user_id: 2, duration: 0},
  {title: "Vegetable Lasagna", instructions: "Begin boiling noodles, and preheat oven to 350.\n\nChop peppers, zucchini, squash, garlic and herbs.\n\nBegin to heat garlic and peppers along with olive oil, adding zucchini and squash as ingredients soften, and finally herbs.\n\nLayer the cooked ingredients into lasagna tray mixing in marinara and cheese, alternating layers with noodles.\n\nBake 30-45 minutes or until top has browned.", ingredients: "Lasagna Noodles\n1 Can marinara sauce\nBasil\nOregano\nMozzarella cheese\nRicotta cheese\n2 Bell peppers\n2 Zucchini\n2 Summer squash\n4 Cloves garlic\nOlive Oil", user_id: 2, duration: 2},
  {title: "Gouda Grilled Cheese", instructions: "Butter the bread, add cheese and sprouts, and cook until browned.  Serve with side of tomato vodka soup.", ingredients: "Bakery fresh bread\nSmoked gouda\nAlfalfa sprouts\nTomato vodka soup\nButter", user_id: 3, duration: 0},
  {title: "Wild Rice and Squash", instructions: "Roast squash halves in oven.  Cook rice over stove.  Add mixture of rice, cranberries, chopped green onion, crushed almonds, and cinnamon/nutemeg to inside of roasted acorn squash and serve.", ingredients: "Wild rice\nAcorn squash\nDried cranberries\nGreen onion\nAlmonds\nCinnamon\nNutmeg", user_id: 3, duration: 1}
])
UserRecipe.create!([
  {user_id: 1, recipe_id: 1},
  {user_id: 1, recipe_id: 2},
  {user_id: 2, recipe_id: 3},
  {user_id: 2, recipe_id: 4},
  {user_id: 3, recipe_id: 5},
  {user_id: 3, recipe_id: 6}
])
