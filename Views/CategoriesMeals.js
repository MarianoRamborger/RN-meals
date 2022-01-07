import React from 'react'
import {View, Text, Button,  StyleSheet} from 'react-native'

const CategoriesMeals = ({navigation}) => {
    return <View style={styles.screen}>
        <Text>
            Categories Meals
        </Text>
        <Button title="Go to Details" onPress={()=>{ 
            navigation.navigate({
                    routeName:"MealDetails"
            })}} />
        <Button title="Go Back" onPress={()=>{
            navigation.goBack()
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

export default CategoriesMeals