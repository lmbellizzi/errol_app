import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';


const uiTheme = {
  palette: {
    primaryColor: COLOR.lightBlue900,
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20,
    },
  },
};

export default class InfoView extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
          <Toolbar
            leftElement="close"
            onLeftElementPress={() => this.props.navigation.navigate('Home')}
            centerElement="Info"
          />
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to Info View
            </Text>
          </View>
        
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#455A64',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});