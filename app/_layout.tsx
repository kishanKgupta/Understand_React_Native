import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

const App = () => {
    let name = "kishan Kumar Gupta"
    function book() {
        return "Your order is book."
    }
  return (
    <View style={styles.container}>
          <Text style={styles.text}>Hello</Text>
          <Text>{name}</Text>
          <Text>{book()}</Text>
          <Button title="press me too"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20, // Apply fontSize here instead of View
  },
});

export default App;
