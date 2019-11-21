import React from "react";
import { connect } from "react-redux";
import { Button, ScrollView, StyleSheet, Text } from "react-native";

function HomeScreen({ navigation, barcode }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>This is a homescreen</Text>
      <Text style={styles.text}>this should be upc {`${barcode}`}</Text>
      <Button
        title="Click me foo"
        onPress={() => navigation.navigate("Barcode")}
      />
    </ScrollView>
  );
}

export default connect(({ barcode }) => ({ barcode }))(HomeScreen);

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
