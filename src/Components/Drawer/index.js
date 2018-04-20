import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'
import { COLOR, ThemeProvider, Toolbar, Drawer, Avatar } from 'react-native-material-ui'

import Container from '../Layouts/container'

const uiTheme = {
    palette: {
        primaryColor: COLOR.blue900,
        accentColor: COLOR.pink500,
      },
    toolbar: {
        container: {
            height: 70,
            paddingTop: 20,
          },
      },
      avatar: {
          container: {
              backgroundColor: '#333'
          }
      }
}

export default class DrawerMenu extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
          active: 'info',
        };
    }
  
    _setInfoActive() {
      this.setState({ active: 'info' });
    }
  
    render() {
      return (
        <ThemeProvider uiTheme={uiTheme}>
            <Container>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
                    centerElement="Menu"
                />
                <View style={styles.container}>
                    <Drawer>
                        <Drawer.Header >
                            <Drawer.Header.Account
                                style={{ 
                                    container: { backgroundColor: '#fafafa' },
                                }}
                                avatar={<Avatar text={'L'} />}
                                
                                footer={{
                                    dense: true,
                                    centerElement: {
                                        primaryText: 'Leandro Bellizzi',
                                        secondaryText: 'leandrobellizzi@outlook.com',
                                    },
                                    rightElement: 'arrow-drop-down',
                                }}
                            />
                        </Drawer.Header>
                        <Drawer.Section
                            style={{
                                label: {color: '#0000ff'}
                            }}
                            divider
                            items={[
                                {
                                    icon: 'bookmark-border', value: 'College',
                                    active: this.state.active == 'college',
                                    onPress: () => {
                                        this.setState({ active: 'college' });
                                        this.props.navigation.navigate('College');
                                    },
                                },
                                {
                                    icon: 'home', value: 'Home',
                                    active: this.state.active == 'home',
                                    onPress: () => {
                                        this.setState({ active: 'home' });
                                        this.props.navigation.navigate('Home');
                                    },
                                },
                                {
                                    icon: 'email', value: 'Emails',
                                    active: this.state.active == 'email',
                                    onPress: () => {
                                        this.setState({ active: 'email' });
                                        this.props.navigation.navigate('Email');
                                    },
                                },
                            ]}
                        />
                        <Drawer.Section
                            title="Personal"
                            items={[
                                {
                                    icon: 'info', value: 'Info',
                                    active: this.state.active == 'info',
                                    onPress: () => {
                                        this.setState({ active: 'info' });
                                        this.props.navigation.navigate('Info');
                                    },
                                },
                                {
                                    icon: 'settings', value: 'Settings',
                                    active: this.state.active == 'settings',
                                    onPress: () => {
                                        this.setState({ active: 'settings' });
                                        this.props.navigation.navigate('Settings');
                                    },
                                },
                            ]}
                        />
                    </Drawer>
                </View>
            </Container>
        </ThemeProvider>
      );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        backgroundColor: '#455A64',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})
