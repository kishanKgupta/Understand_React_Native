import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.text}>Hello</Text>
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
    fontSize: 30, // Apply fontSize here instead of View
  },
});

export default App;
