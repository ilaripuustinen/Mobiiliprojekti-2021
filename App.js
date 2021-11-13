import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Frontpage from './components/Frontpage';
import Planet from './components/Planet';
import style from './style/style';
import Horoscope from './components/Horoscope';
import FetchApi from './components/FetchApi';
import IlarinDemot from './components/IlarinDemot';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Frontpage} />
        <Stack.Screen name="Planets" component={Planet} />
        <Stack.Screen name="FetchApi" component={FetchApi} />
        <Stack.Screen name="Ilarin Demot" component={IlarinDemot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
/* <FetchApi/> */
}