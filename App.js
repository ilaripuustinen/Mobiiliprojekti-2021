import { DarkTheme, NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Frontpage from './components/Frontpage';
import Planet from './components/Planet';
import styles from './style/style';
import Horoscope from './components/Horoscope';
import FetchApi from './components/FetchApi';
import IlarinDemot from './components/IlarinDemot';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'white',
    background: 'pink',
    card: 'transparent',
    text: '#000000',
    border: 'transparent',
    notification: '#000000',
  },
  fontSize: 30,
};

export default function App() {

  return (
     <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Frontpage}/>
        <Stack.Screen name="Planets" component={Planet} />
        <Stack.Screen name="FetchApi" component={FetchApi} />
        <Stack.Screen name="Ilarin Demot" component={IlarinDemot} />
        <Stack.Screen name="Horoscope" component={Horoscope} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}