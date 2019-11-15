import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Button, ScrollView, StyleSheet, Text } from "react-native";
import { useUpcState } from "../hooks";

export default function HomeScreen({ navigation }) {
  const [upc] = useUpcState();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>This is a homescreen</Text>
      <Text style={styles.text}>{upc}</Text>
      <Button
        title="Click me foo"
        onPress={() => navigation.navigate("Barcode")}
      />
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: ""
};
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 32
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#e8e8e8"
  }
});
