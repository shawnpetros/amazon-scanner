import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function SettingsScreen () {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a settings screen</Text>
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Settings'
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 32
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
