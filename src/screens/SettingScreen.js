import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#006600", fontSize: 40 }}>Settings Screen!</Text>
      <Ionicons name="ios-settings-outline" size={80} color="#006600" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    margin: 0,
    padding: 0,
    marginLeft: 10,
  },
});
