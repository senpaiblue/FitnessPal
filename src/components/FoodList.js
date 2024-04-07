import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function FoodList({ item }) {
  return (
    <View className="flex flex-row items-center bg-neutral-50 px-[24px] py-[12px] mx-[8px] my-[4px] border border-neutral-200 rounded-2xl ">
      <View className="flex-1 gap-5">
        <Text className="font-semibold text-[16px]">{item.label}</Text>
        <View>
          <Text className="font-medium text-[14px]">
            {item.cal}cal,{item.brand}
          </Text>
        </View>
      </View>
      <Ionicons name="add-circle-sharp" size={24} color="gray" />
    </View>
  );
}
