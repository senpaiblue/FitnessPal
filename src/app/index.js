import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex flex-row pt-20 justify-center">
      <StatusBar style="auto" />
      <Text className="text-black">Open up App.js to </Text>
    </View>
  );
}
