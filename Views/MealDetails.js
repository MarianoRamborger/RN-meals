import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const MealDetails = ({navigation}) => {
    return <View style={styles.screen}>
        <Text>
            Meal Details
        </Text>
        <Button title="Go Back to categories" onPress={()=>{
            navigation.popToTop()
        }} />
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
       alignItems: 'center'
    }
}) 

export default MealDetails