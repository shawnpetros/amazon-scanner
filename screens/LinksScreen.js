import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

export default function LinksScreen () {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Text style={styles.text}>This is a links screen</Text>
    </ScrollView>
  )
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
