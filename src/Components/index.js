import React, { Component } from 'react'
import { StyleSheet, Text, StatusBar, View } from 'react-native'
import { Navigator, NativeModules } from 'react-native'

import { COLOR, ThemeProvider } from 'react-native-elements'
import { Toolbar, BottomNavigation, Icon } from 'react-native-elements'
import { TabRouter } from 'react-navigation'

import Container from './Layouts/container'
import AboutView from './Pages/about'
import CollegeView from './Pages/college'
import MessagesView from './Pages/email'
import HomeView from './Pages/home'

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
        accentColor: COLOR.pink500,
    },
      toolbar: {
        container: {
            height: 70,
            paddingTop: 20
        }
    }
}

const TabRoute = TabRouter({
    Home: { screen: HomeView },
    Email: { screen: MessagesView },
    Collage: { screen: CollegeView },
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
        return <Component />
    }
}

class AppContainer extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            active: 'Home',
        }
    }

    static navigationOptions = {
        title: 'Menu',
    }

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Container>
                    <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                    <Toolbar 
                        leftElement="menu"
                        centerElement={this.state.active}
                        onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                    />

                    <BottomNavigation 
                        active={this.state.active}
                        hidden={false}
                        style={styles.bottomNavigation}
                    >
                        <BottomNavigation.Action
                            key="Home"
                            icon="home"
                            label="Home"
                            onPress={() => this.setState({ active: 'Home' })}
                        />
                        <BottomNavigation.Action
                            key="Email"
                            icon="newspapper"
                            label="Messages"
                            onPress={() => {
                                this.setState({ active: 'Email' });
                            }}
                        />
                        <BottomNavigation.Action
                            key="Collage"
                            icon="map"
                            label="Faeterj"
                            onPress={() => this.setState({ active: 'Email' })}
                        />
                        <BottomNavigation.Action
                            key="About"
                            icon="profile"
                            label="Sobre"
                            onPress={() => this.setState({ active: 'About' })}
                        />
                    </BottomNavigation>
                </Container>
            </ThemeProvider>
        )
    }
}

const styles = StyleSheet.create({
    bottomNavigation: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
})

export default AppContainer