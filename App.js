import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import Home from './components/Home';
import Planet from './components/Planet';
import Horoscope from './components/Horoscope';
import aquarius from './components/HoroscopePages/aquarius';
import Map from './components/Map';
import Neptune from './components/Planets/Neptune';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
      border: 'transparent',
      text: 'black',
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
        <Stack.Screen name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Planets"
          component={Planet}
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Horoscope" component={Horoscope}
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="aquarius" component={aquarius}
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Map" component={Map}
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Neptune" component={Neptune}
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}