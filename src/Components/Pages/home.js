import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, StatusBar } from 'react-native'


export default class HomeView extends Component {
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
        <Text style={styles.welcome}> Home View </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
