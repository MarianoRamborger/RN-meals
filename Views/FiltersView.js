import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const FiltersView = () => {
    return <View style={styles.screen}>
        <Text>
            Filters View
        </Text>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
       alignItems: 'center'
    }
}) 

export default FiltersView