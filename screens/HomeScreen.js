import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native'
import { API_URL_BUILDER } from '../constants/api'
import { setCode } from '../store/actions/barcode'

function HomeScreen ({ navigation, barcode, setCode }) {
  const clear = navigation.getParam('clear', false)
  console.log('clear is set to', clear)
  const [isSearching, setIsSearching] = useState(false)
  // useEffect(
  //   () => {
  //     if (clear) setCode('')
  //   },
  //   [clear]
  // )
  const fetchProduct = async () => {
    const url = API_URL_BUILDER(barcode)
    console.log('homescreen useEffect fired')
    console.log('before setIsSearching', isSearching)
    setIsSearching(true)
    console.log('after setIsSearching', isSearching)
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(json => {
        console.log('got some json', json)
        navigation.navigate('Item', { product: json.products[0] })
        setTimeout(() => {
          setIsSearching(false)
        }, 1000)
      })
      .catch(e => {
        setIsSearching(false)
        console.log(JSON.stringify(e, null, 2))
      })
  }
  useEffect(
    () => {
      fetchProduct()
    },
    [barcode]
  )
  return isSearching ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          fontSize: 24,
          marginBottom: 30
        }}
      >
        Searching for items!
      </Text>
      <ActivityIndicator style={{}} size='large' color='#0000ff' />
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Let's send Santa some shiiit!</Text>
      <Button
        title='Click me to scan stuff!'
        onPress={() => navigation.navigate('Barcode')}
      />
    </ScrollView>
  )
}

export default connect(
  ({ barcode }) => ({ barcode }),
  { setCode }
)(HomeScreen)

HomeScreen.navigationOptions = {
  title: ''
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 32
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#e8e8e8'
  }
})
