import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import FoodList from "../components/FoodList";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const performSearch = () => {
    console.warn("searching for", search);
    setSearch("");
  };
  const foodItems = [
    {
      label: "Pizza",
      cal: 75,
      brand: "Dominoes",
    },
    { label: "Apple", cal: 50, brand: "7Eleven" },
    {
      label: "Coffee",
      cal: 35,
      brand: "Starbucks",
    },
  ];
  return (
    <View className="flex flex-column pt-20 justify-center">
      <View className="bg-neutral-100 px-[16px] py-[8px] mx-[8px] flex flex-row gap-4 rounded-xl mb-[12px]">
      <Ionicons name="search" size={24} color="black" />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search .."
        />
      </View>
      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodList item={item} />}
      />
    </View>
  );
}
