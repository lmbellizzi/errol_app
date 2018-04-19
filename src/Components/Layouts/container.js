import React, { Component } from 'react-native'
import { PropTypes } from 'prop-types'
import { View, StyleSheet } from 'react-native'

const propTypes = {
    children: PropTypes.node,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

class Container extends Component {
    render() {
        return(
            <View style={styles.cotainer}>
                {this.props.children}
            </View>
        )
    }
}

Container.propTypes = propTypes

export default Container