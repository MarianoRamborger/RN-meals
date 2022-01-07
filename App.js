
import { StyleSheet, Text, View } from 'react-native';
import * as font from 'expo-font'
import AppLoading from 'expo-app-loading';
import {React, useState} from 'react'
import MealsNavigator from './Navigation/MealsNavigator';


const fetchFonts = () => {
  font.loadAsync({ //this is returned cause its a promise, and it is to be used with AppLoading
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {



  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {  
    return <AppLoading startAsync={fetchFonts} onFinish={()=> setFontLoaded(true)} onError={(err) => console.log(err)} />
  }

  return <MealsNavigator  />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working osn your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
