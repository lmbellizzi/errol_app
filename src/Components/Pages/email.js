import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'

export default class MessagesView extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      isLoading: true
    }
  }
    
  componentDidMount() {
    return fetch('https://stark-stream-15622.herokuapp.com/messages')
      .then((resp) => resp.json())
      .then((respJson) => {
        this.setState({
          isLoading: false,
          dataSource: respJson
        }, function() {

        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(tem, index) => index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  containerLoading: {
    flex: 1,
    padding: 20
  }
})
