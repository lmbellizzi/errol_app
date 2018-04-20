import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import DrawerMenu from './src/Components/Drawer/index'
import AppContainer from './src/Components/index'
import InfoView from './src/Components/Pages/info'

const stackNavigator = StackNavigator ({
  Info: { screen: InfoView },
}, {
  headerMode: 'none'
})

const App = DrawerNavigator({
  Home: {
    screen: AppContainer,
  },
  Stack: {
    screen: stackNavigator
  }
}, {
  contentComponent: DrawerMenu,
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
})

export default App