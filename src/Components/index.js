import React, { Component } from 'react'
import { Navigator, NativeModules, StyleSheet, Text, StatusBar, View } from 'react-native'
import { Toolbar, BottomNavigation, Icon } from 'react-native-material-ui'
import { COLOR, ThemeProvider } from 'react-native-material-ui'
import { TabRouter } from 'react-navigation'

import AboutView from './Pages/about'
import CollegeView from './Pages/college'
import MessagesView from './Pages/email'
import HomeView from './Pages/home'

const uiTheme = {
    palette: {
        primaryColor: COLOR.blue900,
        accentColor: COLOR.pink500,
    },
    toolbar: {
      container: {
        height: 70,
        paddingTop: 20,
      }
    }
}

const TabRoute = TabRouter({
    Home: { screen: HomeView },
    Email: { screen: MessagesView },
    College: { screen: CollegeView },
    About: { screen: AboutView }
}, {
    initialRouteName: 'Home',
})

class TabContentNavigator extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            active: props.value.active,
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            active: newProps.value.active,
        })
    }

    render() {
        const Component = TabRoute.getComponentForRouteName(this.state.active)
        return (
            
            <Component />
            
        )
        
    }
}

export default class AppContainer extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            active: 'Home',
        }
    }

    static navigationOptions = {
        title: 'Errol',
    }

    _navigate = () => this.props.navigation.navigate('DrawerOpen')
    
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Toolbar 
                    leftElement="menu"
                    centerElement={this.state.active}
                    onLeftElementPress={() => this._navigate()}
                />
                <TabContentNavigator value={this.state} key={this.state} />
                <BottomNavigation 
                    active={this.state.active}
                    hidden={false}
                    style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
                >
                    <BottomNavigation.Action
                        key="Home"
                        icon="home"
                        label="Home"
                        onPress={() => this.setState({ active: 'Home' })}
                    />
                    <BottomNavigation.Action
                        key="Email"
                        icon="message"
                        label="Notícias"
                        onPress={() => {
                            this.setState({ active: 'Email' });
                        }}
                    />
                    <BottomNavigation.Action
                        key="College"
                        icon="laptop-mac"
                        label="Faeterj"
                        onPress={() => this.setState({ active: 'College' })}
                    />
                    <BottomNavigation.Action
                        key="About"
                        icon="info"
                        label="Sobre"
                        onPress={() => this.setState({ active: 'About' })}
                    />
                </BottomNavigation>
            </ThemeProvider>
        )
    }
}