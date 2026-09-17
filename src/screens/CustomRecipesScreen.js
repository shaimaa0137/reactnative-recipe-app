import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

export default function CustomRecipesScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const route = useRoute();
  const { recipe } = route.params || {};

  const favoriteRecipe = useSelector(
    (state) => state.favorites.favoriterecipes
  );

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          No Recipe Details Available
        </Text>
      </View>
    );
  }

  const isFavourite = favoriteRecipe.some(
    (item) => item.idFood === recipe.idFood
  );

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(recipe));
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
      testID="scrollContent"
    >
      {/* Recipe Image */}
      <View
        style={styles.imageContainer}
        testID="imageContainer"
      >
        {recipe.image && (
          <Image
            source={{ uri: recipe.image }}
            style={styles.recipeImage}
          />
        )}
      </View>

      {/* Back and Favorite Buttons */}
      <View
        style={styles.topButtonsContainer}
        testID="topButtonsContainer"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleToggleFavorite}
          style={styles.favoriteButton}
        >
          <Text>
            {isFavourite ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Recipe Details */}
      <View
        style={styles.contentContainer}
        testID="contentContainer"
      >
        <Text style={styles.recipeTitle}>
          {recipe.title}
        </Text>

        {/* Ingredients */}
        {recipe.ingredients?.length > 0 && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              Ingredients
            </Text>

            <View style={styles.ingredientsList}>
              {recipe.ingredients.map((ingredient, index) => (
                <View
                  style={styles.ingredientItem}
                  key={index}
                >
                  <View style={styles.ingredientBullet} />

                  <Text style={styles.ingredientText}>
                    {ingredient.measure}{" "}
                    {ingredient.ingredientName}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Content */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Instructions
          </Text>

          <Text style={styles.contentText}>
            {recipe.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  recipeImage: {
    width: wp(98),
    height: hp(50),
    borderRadius: 35,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 4,
  },

  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(4),
  },

  recipeTitle: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: hp(2),
  },

  sectionContainer: {
    marginBottom: hp(2),
  },

  sectionTitle: {
    fontSize: hp(2.5),
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: hp(1),
  },

  ingredientsList: {
    marginLeft: wp(1),
  },

  ingredientItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(1),
    padding: 10,
    backgroundColor: "#FFF9E1",
    borderRadius: 8,
    elevation: 2,
  },

  ingredientBullet: {
    backgroundColor: "#FFD700",
    borderRadius: 50,
    height: hp(1.5),
    width: hp(1.5),
    marginRight: wp(2),
  },

  ingredientText: {
    fontSize: hp(1.9),
    color: "#333",
  },

  topButtonsContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: hp(4),
  },

  backButton: {
    padding: 8,
    borderRadius: 50,
    marginLeft: wp(5),
    backgroundColor: "white",
  },

  favoriteButton: {
    padding: 8,
    borderRadius: 50,
    marginRight: wp(5),
    backgroundColor: "white",
  },

  contentText: {
    fontSize: hp(1.6),
    color: "#4B5563",
  },

  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#4B5563",
  },
});