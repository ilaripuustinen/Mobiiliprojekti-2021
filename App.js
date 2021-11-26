import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import Home from './components/Home';
import Planet from './components/Planet';
import Horoscope from './components/Horoscope';
import aquarius from './components/HoroscopePages/aquarius';
import FetchApi from './components/FetchApi';
import IlarinDemot from './components/IlarinDemot';
import Map from './components/Map';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'pink',
      border: 'transparent',
      text: 'black !important',
    },
  };

  const [loaded] = useFonts({
    Helvetica: require('./assets/fonts/Helvetica.ttf'),
    Oswald: require('./assets/fonts/Oswald.ttf'),
    Merriweather: require('./assets/fonts/Merriweather-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      {/* Jos haluaa navigation näkyviin, poista screenOptions={{headerShown: false}} */}
      <Stack.Navigator
        screenOptions={{
          // headerShown: false,
          headerTransparent: true,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Planets" component={Planet} />
        <Stack.Screen name="FetchApi" component={FetchApi} />
        <Stack.Screen name="Ilarin Demot" component={IlarinDemot} />
        <Stack.Screen name="Horoscope" component={Horoscope} />
        <Stack.Screen name="aquarius" component={aquarius} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}