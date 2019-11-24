import React from 'react'
import { ScrollView, StyleSheet, Text, Image, Button } from 'react-native'

function getProductDetails (product) {
  const name = product.product_name
  const imageUrl = product.images.find(url => /https:\/\//.test(url))
  const averagePrice = '' // find average price
  const lowestPrice = '' // find lowest price
  const highestPrice = '' // find highest price

  return {
    name,
    imageUrl,
    averagePrice,
    lowestPrice,
    highestPrice
  }
}

export default function ItemScreen ({ navigation }) {
  const product = navigation.getParam('product', {})
  const details = getProductDetails(product)
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Image
        style={{ width: 300, height: 300, alignSelf: 'center', marginTop: 40 }}
        source={{ url: details.imageUrl }}
      />
      <Text style={styles.text}>{details.name}</Text>
      <Text style={styles.confirmation}>Is this the correct item?</Text>
      <Button
        title='Yes, send it to Santa!'
        onPress={() => navigation.navigate('Home', { clear: true })}
      />
      <Button title="No, that's not quite it..." />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    maxWidth: '75%'
  },
  confirmation: {
    margin: 40,
    alignSelf: 'center',
    fontSize: 16
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
