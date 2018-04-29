import React, { Component, PureComponent } from 'react'
import { WebView, StatusBar, View, StyleSheet, ActivityIndicator } from 'react-native'


const url = 'http://www.faeterj-rio.edu.br/'

class WebViewRender extends Component {
  render () {
    return(
      <WebView 
        source = {{ uri: url }}
        style={styles.webview}
      />
    )
  }
}


export default class CollegeView extends Component {
  constructor(props, context) {
    super(props, context)

    this.state={
      isLoaded: false,
    }
  }
  
  render() {
   
      if (this.state.isLoaded) {
        return(
          <WebViewRender />
        )
      }

      return(
        <View style={styles.container}>
          <View style={styles.containerInner}>
            <WebView
              source = {{ uri: url }}
              onLoad={() => {
                this.setState({isLoaded: true})
              }}
            />
          </View>
          <ActivityIndicator />
        </View>
      )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerInner: {
    height: 0,
    width: 0,
  },
  webview: {
    flex: 1,
    marginTop: 20,
  }
})
