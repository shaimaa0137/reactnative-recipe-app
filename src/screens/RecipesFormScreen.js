import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  
  export default function RecipesFormScreen({ route, navigation }) {
    const { recipeToEdit, recipeIndex, onrecipeEdited } = route.params || {};
  
    const [title, setTitle] = useState(
      recipeToEdit ? recipeToEdit.title : ""
    );
  
    const [image, setImage] = useState(
      recipeToEdit ? recipeToEdit.image : ""
    );
  
    const [description, setDescription] = useState(
      recipeToEdit ? recipeToEdit.description : ""
    );
  
    const [ingredientName, setIngredientName] = useState("");
    const [measure, setMeasure] = useState("");
  
    const [ingredients, setIngredients] = useState(
      recipeToEdit?.ingredients || []
    );
  
    const addIngredient = () => {
      if (ingredientName.trim() === "" || measure.trim() === "") {
        return;
      }
  
      const newIngredient = {
        ingredientName: ingredientName,
        measure: measure,
      };
  
      setIngredients([...ingredients, newIngredient]);
  
      setIngredientName("");
      setMeasure("");
    };
  
    const saverecipe = async () => {
      try {
        const newrecipe = {
          title: title,
          image: image,
          description: description,
          ingredients: ingredients,
        };
  
        const storedrecipes = await AsyncStorage.getItem("customrecipes");
  
        const recipes = storedrecipes
          ? JSON.parse(storedrecipes)
          : [];
  
        if (recipeToEdit) {
          recipes[recipeIndex] = newrecipe;
        } else {
          recipes.push(newrecipe);
        }
  
        await AsyncStorage.setItem(
          "customrecipes",
          JSON.stringify(recipes)
        );
  
        if (recipeToEdit && onrecipeEdited) {
          onrecipeEdited();
        }
  
        navigation.goBack();
      } catch (error) {
        console.log("Error saving recipe:", error);
      }
    };
  
    return (
      <ScrollView style={styles.container}>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
  
        <TextInput
          placeholder="Image URL"
          value={image}
          onChangeText={setImage}
          style={styles.input}
        />
  
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>
            Upload Image URL
          </Text>
        )}
  
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
          numberOfLines={4}
          style={[
            styles.input,
            {
              height: hp(20),
              textAlignVertical: "top",
            },
          ]}
        />
  
        {/* Ingredients */}
        <View style={styles.ingredientsContainer}>
          <Text style={styles.ingredientsTitle}>
            Ingredients
          </Text>
  
          <TextInput
            placeholder="Ingredient name"
            value={ingredientName}
            onChangeText={setIngredientName}
            style={styles.input}
          />
  
          <TextInput
            placeholder="Measurement (e.g. 500g)"
            value={measure}
            onChangeText={setMeasure}
            style={styles.input}
          />
  
          <TouchableOpacity
            onPress={addIngredient}
            style={styles.addIngredientButton}
          >
            <Text style={styles.addIngredientText}>
              Add Ingredient
            </Text>
          </TouchableOpacity>
  
          {ingredients.map((item, index) => (
            <View key={index} style={styles.ingredientItem}>
              <Text style={styles.ingredientText}>
                {item.ingredientName} - {item.measure}
              </Text>
            </View>
          ))}
        </View>
  
        <TouchableOpacity
          onPress={saverecipe}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>
            Save recipe
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: wp(4),
      backgroundColor: "#fff",
    },
  
    input: {
      marginTop: hp(2),
      borderWidth: 1,
      borderColor: "#ddd",
      padding: wp(2),
      marginVertical: hp(1),
    },
  
    image: {
      width: 300,
      height: 200,
      margin: wp(2),
    },
  
    imagePlaceholder: {
      height: hp(20),
      textAlign: "center",
      padding: wp(2),
      borderWidth: 1,
      borderColor: "#ddd",
      paddingTop: hp(8),
    },
  
    ingredientsContainer: {
      marginTop: hp(2),
    },
  
    ingredientsTitle: {
      fontSize: hp(2.5),
      fontWeight: "bold",
      color: "#333",
      marginBottom: hp(1),
    },
  
    addIngredientButton: {
      backgroundColor: "#34D399",
      padding: wp(2),
      alignItems: "center",
      borderRadius: 5,
      marginTop: hp(1),
    },
  
    addIngredientText: {
      color: "#fff",
      fontWeight: "bold",
    },
  
    ingredientItem: {
      backgroundColor: "#FFF9E1",
      padding: wp(3),
      marginTop: hp(1),
      borderRadius: 8,
    },
  
    ingredientText: {
      fontSize: hp(1.8),
      color: "#333",
    },
  
    saveButton: {
      backgroundColor: "#4F75FF",
      padding: wp(2),
      alignItems: "center",
      borderRadius: 5,
      marginTop: hp(3),
      marginBottom: hp(5),
    },
  
    saveButtonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });