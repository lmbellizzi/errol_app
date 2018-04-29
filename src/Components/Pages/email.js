import React, { Component, PureComponent } from 'react'
import { Alert, Text, StyleSheet, ScrollView, View, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { ListItem, Card, Button, Icon, Header } from 'react-native-elements'
import { SheredElement } from 'react-native-motion'


class CardItem extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      iconActive: false,
      iconColor: "#d50000",
      headIconColor: "#000"
    }
  }

  //For now, set the color in icon
  _onSelect = () => {
    if(this.state.iconActive){
      Alert.alert('clicou em mim')
      this.setState({
        iconActive: true,
        iconColor: "#d50000"
      })
    } else {
      this.setState({
        iconActive: false,
        iconColor: "#ffffff"
      })
    }
  }

  render() {
    return(
      //<Card title={this.props.title}>
      //no componente Header, posso criar meus componentes para poder customizar o header.
      //Criar os componentes para o cabeçalho comportar o titulo da mensagem e o footer para
      //comportar o author, data de criação e um ou dois butões (para ações???)
      <Card key={this.props.id}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: this.props.title, style: { flex: 1, alignItems: 'center', color: '#fff' } }}
          outerContainerStyles={{ height: 50, backgroundColor: '#3D6DCC' }}
          innerContainerStyles={{ justifyContent: 'space-around' }}
          rightComponent={{ icon: 'star', style: { color: this.props.headIconColor }}}
          
        />
        <View>
          <Text>{this.props.subject}</Text>
          <Text>{this.props.content}</Text>
        </View>
        <View>
          <Text>{this.props.author}</Text>
          <Text>{this.props.create_at}</Text>
        </View>
      </Card>
    )
  }
}

class MessagesView extends PureComponent {
  constructor(props, context) {
    super(props, context)
    
    this.state = {
      isLoading: true,
      //messages: []
    }
  }


  componentDidMount() {
    return fetch('https://stark-stream-15622.herokuapp.com/messages')
      .then((resp) => resp.json())
      .then((respJson) => {
        this.setState({
          isLoading: false,
          dataSource: respJson
        })        
      })
      .catch((error) => {
        Alert.alert('getMessages', error)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator  animating size="large" />
        </View>
      )
    }

    return (
      <FlatList 
        data={this.state.dataSource}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => 
          <CardItem
            id={item.id}
            title={item.title}
            subject={item.subject}
            content={item.content}
            author={item.author}
            create_at={item.create_at}
          />
        }
      />
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
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default MessagesView
