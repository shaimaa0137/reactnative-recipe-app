import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Categories from "../components/categories";
import Recipes from "../components/recipes";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(null);

  const [categories] = useState([
    {
      idCategory: "1",
      strCategory: "Beef",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/beef.png",
    },
    {
      idCategory: "2",
      strCategory: "Chicken",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/chicken.png",
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/dessert.png",
    },
    {
      idCategory: "4",
      strCategory: "Pasta",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/pasta.png",
    },
    {
      idCategory: "5",
      strCategory: "Vegetarian",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/vegetarian.png",
    },
    {
      idCategory: "6",
      strCategory: "Breakfast",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/breakfast.png",
    },
    {
      idCategory: "7",
      strCategory: "Lamb",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/lamb.png",
    },
    {
      idCategory: "8",
      strCategory: "Pork",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/pork.png",
    },
    {
      idCategory: "9",
      strCategory: "Seafood",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/seafood.png",
    },
    {
      idCategory: "10",
      strCategory: "Vegan",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/vegan.png",
    },
  ]);

  const [allFood] = useState([
    {
      idFood: "1",
      idCategory: "1",
      category: "Beef",
      recipeName: "Beef and Mustard Pie",
      recipeInstructions:
        "Preheat the oven to 150C. Toss the beef and flour together with salt and pepper. Brown the beef, add wine, stock, vegetables and mustard, then cook until tender. Place the beef in a pie dish, cover with pastry and bake until golden.",
      recipeImage:
        "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?q=80&w=1887&auto=format&fit=crop",
      recipeId: "beef_01",
      recipeCategory: "Beef",
      ingredients: [
        { ingredientName: "Beef", measure: "1kg" },
        { ingredientName: "Plain Flour", measure: "2 tbs" },
        { ingredientName: "Rapeseed Oil", measure: "2 tbs" },
        { ingredientName: "Red Wine", measure: "200ml" },
        { ingredientName: "Beef Stock", measure: "500ml" },
        { ingredientName: "Mustard", measure: "2 tbs" },
      ],
      preparationTime: "35 Mins",
      servings: "03 Servings",
      calories: "103 Cal",
      difficulty: "Medium",
    },

    {
      idFood: "2",
      idCategory: "1",
      category: "Beef",
      recipeName: "Beef Banh Mi Bowls",
      recipeInstructions:
        "Cook the beef in a pan until browned. Add vegetables and seasonings. Prepare the rice and arrange the beef and vegetables on top. Serve with sauce.",
      recipeImage:
        "https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?q=80&w=2070&auto=format&fit=crop",
      recipeId: "beef_02",
      recipeCategory: "Beef",
      ingredients: [
        { ingredientName: "Ground Beef", measure: "500g" },
        { ingredientName: "Rice", measure: "200g" },
        { ingredientName: "Cucumber", measure: "1" },
        { ingredientName: "Carrot", measure: "1" },
        { ingredientName: "Soy Sauce", measure: "2 tbs" },
      ],
      preparationTime: "30 Mins",
      servings: "02 Servings",
      calories: "450 Cal",
      difficulty: "Easy",
    },

    {
      idFood: "3",
      idCategory: "1",
      category: "Beef",
      recipeName: "Beef Brisket Pot Roast",
      recipeInstructions:
        "Season the beef and sear it on all sides. Add vegetables, red wine, stock and herbs. Cover and cook until the beef becomes tender. Allow it to rest before serving.",
      recipeImage:
        "https://images.unsplash.com/photo-1622003184404-bc0c66144534?q=80&w=1887&auto=format&fit=crop",
      recipeId: "beef_03",
      recipeCategory: "Beef",
      ingredients: [
        { ingredientName: "Beef Brisket", measure: "1.5kg" },
        { ingredientName: "Onions", measure: "2" },
        { ingredientName: "Carrots", measure: "4" },
        { ingredientName: "Beef Stock", measure: "500ml" },
        { ingredientName: "Thyme", measure: "3 sprigs" },
      ],
      preparationTime: "45 Mins",
      servings: "04 Servings",
      calories: "550 Cal",
      difficulty: "Medium",
    },

    {
      idFood: "4",
      idCategory: "2",
      category: "Chicken",
      recipeName: "Chicken Curry",
      recipeInstructions:
        "Cook the chicken with onions, tomatoes and spices until tender. Serve hot with rice or bread.",
      recipeImage:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1000&auto=format&fit=crop",
      recipeId: "chicken_01",
      recipeCategory: "Chicken",
      ingredients: [
        { ingredientName: "Chicken", measure: "500g" },
        { ingredientName: "Onion", measure: "1" },
        { ingredientName: "Tomato", measure: "2" },
        { ingredientName: "Spices", measure: "2 tsp" },
      ],
      preparationTime: "35 Mins",
      servings: "03 Servings",
      calories: "350 Cal",
      difficulty: "Medium",
    },

    {
      idFood: "5",
      idCategory: "3",
      category: "Dessert",
      recipeName: "Chocolate Cake",
      recipeInstructions:
        "Mix the ingredients together and bake until the cake is fully cooked. Allow it to cool before serving.",
      recipeImage:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
      recipeId: "dessert_01",
      recipeCategory: "Dessert",
      ingredients: [
        { ingredientName: "Flour", measure: "200g" },
        { ingredientName: "Cocoa Powder", measure: "50g" },
        { ingredientName: "Sugar", measure: "150g" },
        { ingredientName: "Eggs", measure: "2" },
      ],
      preparationTime: "40 Mins",
      servings: "04 Servings",
      calories: "420 Cal",
      difficulty: "Easy",
    },

    {
      idFood: "6",
      idCategory: "4",
      category: "Pasta",
      recipeName: "Creamy Pasta",
      recipeInstructions:
        "Cook the pasta until tender. Prepare the creamy sauce and mix it with the pasta. Serve hot.",
      recipeImage:
        "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=1000&auto=format&fit=crop",
      recipeId: "pasta_01",
      recipeCategory: "Pasta",
      ingredients: [
        { ingredientName: "Pasta", measure: "250g" },
        { ingredientName: "Cream", measure: "200ml" },
        { ingredientName: "Cheese", measure: "100g" },
        { ingredientName: "Garlic", measure: "2 cloves" },
      ],
      preparationTime: "25 Mins",
      servings: "02 Servings",
      calories: "380 Cal",
      difficulty: "Easy",
    },

    {
      idFood: "7",
      idCategory: "5",
      category: "Vegetarian",
      recipeName: "Vegetable Bowl",
      recipeInstructions:
        "Cook the vegetables with herbs and spices. Arrange them in a bowl and serve warm.",
      recipeImage:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
      recipeId: "vegetarian_01",
      recipeCategory: "Vegetarian",
      ingredients: [
        { ingredientName: "Broccoli", measure: "1 cup" },
        { ingredientName: "Carrot", measure: "1" },
        { ingredientName: "Bell Pepper", measure: "1" },
        { ingredientName: "Olive Oil", measure: "2 tbs" },
      ],
      preparationTime: "20 Mins",
      servings: "02 Servings",
      calories: "220 Cal",
      difficulty: "Easy",
    },

    {
      idFood: "8",
      idCategory: "6",
      category: "Breakfast",
      recipeName: "Pancakes",
      recipeInstructions:
        "Mix flour, milk and eggs into a smooth batter. Cook the pancakes on a hot pan and serve with your favorite topping.",
      recipeImage:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1000&auto=format&fit=crop",
      recipeId: "breakfast_01",
      recipeCategory: "Breakfast",
      ingredients: [
        { ingredientName: "Flour", measure: "200g" },
        { ingredientName: "Milk", measure: "250ml" },
        { ingredientName: "Eggs", measure: "2" },
        { ingredientName: "Sugar", measure: "2 tbs" },
      ],
      preparationTime: "15 Mins",
      servings: "02 Servings",
      calories: "300 Cal",
      difficulty: "Easy",
    },
    {
        idFood: "9",
        idCategory: "9",
        category: "Seafood",
        recipeName: "Seafood Rice",
        recipeInstructions:
          "Cook the seafood with onions, garlic and spices. Add cooked rice and mix everything together. Serve hot.",
        recipeImage:
          "https://images.unsplash.com/photo-1534080564583-6be75777b214?q=80&w=1000&auto=format&fit=crop",
        recipeId: "seafood_01",
        recipeCategory: "Seafood",
        ingredients: [
          { ingredientName: "Mixed Seafood", measure: "400g" },
          { ingredientName: "Rice", measure: "250g" },
          { ingredientName: "Onion", measure: "1" },
          { ingredientName: "Garlic", measure: "2 cloves" },
        ],
        preparationTime: "30 Mins",
        servings: "03 Servings",
        calories: "390 Cal",
        difficulty: "Medium",
      },
      
      {
        idFood: "10",
        idCategory: "10",
        category: "Vegan",
        recipeName: "Vegan Buddha Bowl",
        recipeInstructions:
          "Cook the vegetables and prepare the grains. Place everything in a bowl and serve with your favorite dressing.",
        recipeImage:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
        recipeId: "vegan_01",
        recipeCategory: "Vegan",
        ingredients: [
          { ingredientName: "Chickpeas", measure: "1 cup" },
          { ingredientName: "Quinoa", measure: "1 cup" },
          { ingredientName: "Avocado", measure: "1" },
          { ingredientName: "Vegetables", measure: "2 cups" },
        ],
        preparationTime: "25 Mins",
        servings: "02 Servings",
        calories: "320 Cal",
        difficulty: "Easy",
      },
  ]);

  const handleChangeCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredfoods =
    activeCategory === null
      ? allFood
      : allFood.filter(
          (food) => food.category === activeCategory
        );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        testID="scrollContainer"
        showsVerticalScrollIndicator={false}
      >
        <View
          testID="headerContainer"
          style={styles.headerContainer}
        >
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/women/44.jpg",
            }}
            style={styles.avatar}
          />

          <Text style={styles.headerText}>Hello, User!</Text>
        </View>

        <View
          testID="titleContainer"
          style={styles.titleContainer}
        >
          <Text style={styles.title}>
            Make your own food,
          </Text>

          <Text style={styles.subtitle}>
            stay at home
          </Text>
        </View>

        <View
          testID="categoryList"
          style={styles.categoryList}
        >
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </View>

        <View
          testID="foodList"
          style={styles.foodList}
        >
          <Recipes
            foods={filteredfoods}
            categories={categories}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(5),
    paddingTop: hp(3),
  },

  avatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
  },

  headerText: {
    fontSize: wp(5),
    fontWeight: "bold",
    marginLeft: wp(3),
  },

  titleContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(3),
  },

  title: {
    fontSize: wp(7),
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: wp(5),
    color: "gray",
    marginTop: hp(0.5),
  },

  categoryList: {
    marginTop: hp(3),
  },

  foodList: {
    marginTop: hp(2),
    paddingHorizontal: wp(2),
  },
});