import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Recipes({ categories, foods }) {
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
    <ArticleCard
      item={item}
      index={index}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <View testID="recipesDisplay">
        <FlatList
          data={foods}
          keyExtractor={(item) => item.idFood.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
}

const ArticleCard = ({ item, index, navigation }) => {
  return (
    <View
      style={styles.cardContainer}
      testID="articleDisplay"
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RecipeDetail", {
            recipe: item,
          })
        }
      >
        <Image
          source={{ uri: item.recipeImage }}
          style={styles.articleImage}
          resizeMode="cover"
        />

        <Text style={styles.articleText}>
          {item.recipeName}
        </Text>

        <Text style={styles.articleDescription}>
          {item.recipeInstructions}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(2),
    marginTop: hp(2),
  },

  cardContainer: {
    justifyContent: "center",
    marginBottom: hp(2),
    flex: 1,
    paddingHorizontal: wp(2),
  },

  articleImage: {
    width: "100%",
    height: hp(20),
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },

  articleText: {
    fontSize: hp(1.8),
    fontWeight: "600",
    color: "#52525B",
    marginTop: hp(0.8),
  },

  articleDescription: {
    fontSize: hp(1.3),
    color: "#6B7280",
    marginTop: hp(0.5),
  },

  row: {
    justifyContent: "space-between",
  },
});