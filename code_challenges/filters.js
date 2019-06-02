var sampleMeals = [
  {
      name: "chicken with beans",
      descriptions: "it's yummy and delicious and has bits of kale right in it.",
      ingredients: ['chicken', 'beans', 'kale', 'garlic'],
      nutritional_facts: {
          calories: 450
      }
  },
  {
      name: "steak frites with garlic mashed carrots",
      descriptions: "a classic dish featuring french fried potatoes and a hunk of meat.",
      ingredients: ['beef', 'potatoes', 'garlic', 'carrots'],
      nutritional_facts: {
          calories: 1250
      }
  },
  {
      name: "paleo dinosaur chili",
      descriptions: "get your carnivore on with this disc contianing mostly meats.",
      ingredients: ['beef', 'tomato', 'garlic', 'corn'],
      nutritional_facts: {
          calories: 750
      }
  },
];

// categories: high, medium or low
var filters = {
    calories: '',
    search: '',
    searchByIngredients: []
}

function filterAndSortMeals(meals, sortType) {
    if (sortType === 'search') {
        searchMeals(filters[sortType])
    } else if (sortType === 'calories') {
        searchMealsByCalories(meals, filters[sortType])
    } else if (sorttype === 'searchByIngredients') {
        searchMealsByIngredients(meals, listOfIngredients[sortType])
    }
}

function searchMeals(meals, query) {
    var result = []
    meals.forEach((meal) => {
        if ((meal.name + meal.description).indexOf(query) > -1) {
           result.push(meal)
        }
    })
    return result
}

function searchMealsByCalories(meals, caloriesValue) {
    var result = []
    meals.forEach((meal) => {
        var calories = meal.nutritional_facts.calories

        if (caloriesValue === 'high') {
            if (calories > 1000) {
                result.push(meal)
            }
        } else if (caloriesValue === 'medium') {
            if (1000 < calories < 500) {
                result.push(meal)
            }
        } else if (caloriesValue === 'low') {
            if (calories < 500) {
                result.push(meal)
            }
        }
    })
    return result
}

function searchMealsByCalories(meals, listOfIngredients) {
    var result = []
    meals.forEach((meal) => {
        var ingredients = meal.ingredients
        var mealsWithIngredients = listOfIngredients.filter((ingredient) => {
            return ingredients.indexOf(ingredient) > -1
        })

        if (mealsWithIngredients.length > 0) {
            result.push(meal)
        }
    })
    return result
}
