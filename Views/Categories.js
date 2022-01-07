import React from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native'

import {CATEGORIES} from '../mock/dummyData'


const Categories = ({navigation}) => {



    const renderGridItem = (itemData) => {
        return  <TouchableOpacity  style={styles.gridItem} onPress={()=>{navigation.navigate({ routeName: 'CategoriesMeals'}) }}>
            <View>
                <Text> {itemData.item.title} </Text>
            </View>
        </TouchableOpacity> 
     }


    return <FlatList 
    numColumns = {2} //With this it acts like a grid
    data={CATEGORIES}
    renderItem={renderGridItem}
    />
}

 //! Pueden ponerse dentro del component, no necesita estrictamente ser declarado en el stack navigator



const styles = StyleSheet.create({
     screen: {
         flex: 1,
         justifyContent: 'center',
        alignItems: 'center',
     },
     gridItem: {
         flex: 1,
         margin: 15,
         height: 100
     }
}) 

export default Categories