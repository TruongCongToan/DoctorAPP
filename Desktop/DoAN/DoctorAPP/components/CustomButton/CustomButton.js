import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type, bgColor, fgColor }) => {
  return (
    <Pressable
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
        onPress={onPress}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },
  container_TERTIARY: {},


  text: {
    fontWeight: "bold",
    color: "white",
    // textTransform:'uppercase'
  },
  text_TERTIARY: {
    color: "gray",
  },
});

export default CustomButton;
