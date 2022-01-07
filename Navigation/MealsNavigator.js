import React from 'react'
import { Platform} from 'react-native'
import { createAppContainer } from 'react-navigation'; //? Esto, a diferencia del createstacknavigator, siempre se importa de aca
//? App container should wrap your main navigator
import { createStackNavigator } from 'react-navigation-stack';
import {Text, View } from 'react-native'
import Categories from '../Views/Categories'
import CategoriesMeals from '../Views/CategoriesMeals'
import MealDetails from '../Views/MealDetails'

import Colors from '../Constants/Colors'

//? We'll use a navigation stack. Views are ordered on a stack, with the topmost view being the visible one.


const MealsNavigator = createStackNavigator({ //? En este stack van SOLO las views interconectadas. Se registran como keyvalue pairs
    //? Any component passed to the navigator gets a speshul prop called Navigation, full of navigation functions
    Categories: {
        screen: Categories,
        navigationOptions: () => ({
            title: 'Meal Categories',
            headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
            
        },
        headerTintColor: Colors.accentColor
    })
    },
    CategoriesMeals:  { 
        screen: CategoriesMeals,
    navigationOptions: ({navigation}) => ({
        title: `Categories Meals`,
      }),
    },
    MealDetails: MealDetails
        

})

//? Besides Navigation you get
//? Push:Pushes screen it to the top of the stack. It can even push the current scree to the top, which may be useful to refresh, or
//? different screens that use the same component but have different content depending on the props
//? You also have navigation.goBack(). And also navigation.pop() which throws the screen to the bottom of the stack.
//? Also navigation.popToTop() que te lleva a la root screen inicial del stack
//? Also replace, which replaces the current screen with another one, and empties the back history


export default createAppContainer(MealsNavigator) //? Like this, the root container wrapped by the createAppContainer


//! Ishus may arise since the course uses v4 and I use v5?