import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'

export default class AboutView extends Component {
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    return (
      <View>
        <Text> About View </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
