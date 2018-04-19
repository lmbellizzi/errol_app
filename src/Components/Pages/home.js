import React, { Component } from 'react'
import { AppRegistry, Text, StyleSheet, View, StatusBar } from 'react-native'

export default class HomeView extends Component {
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    return (
      <View>
        <Text> Home View </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
