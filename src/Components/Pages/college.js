import React, { Component } from 'react'
import { WebView, StatusBar, View, StyleSheet } from 'react-native'

export default class CollegeView extends Component {
  constructor(props, context) {
    super(props, context)
  }
  
  

  render() {
    return (
      <WebView source = {{ uri: 'http://www.faeterj-rio.edu.br/' }} style={styles.webview}/>
    )
  }
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    marginTop: 20,
  }
})
