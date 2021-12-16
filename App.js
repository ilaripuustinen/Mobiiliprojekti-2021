import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import Home from './components/Home';
import Horoscope from './components/Horoscope';
import Aquarius from './components/HoroscopePages/Aquarius';
import Pisces from './components/HoroscopePages/Pisces'
import Aries from './components/HoroscopePages/Aries';
import Taurus from './components/HoroscopePages/Taurus';
import Gemini from './components/HoroscopePages/Gemini';
import Cancer from './components/HoroscopePages/Cancer';
import Leo from './components/HoroscopePages/Leo';
import Virgo from './components/HoroscopePages/Virgo';
import Libra from './components/HoroscopePages/Libra';
import Scorpio from './components/HoroscopePages/Scorpio';
import Sagittarius from './components/HoroscopePages/Sagittarius';
import Capricorn from './components/HoroscopePages/Capricorn';
import Map from './components/Map';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import News from './components/News';
import Details from './components/Details';
import Earth from './components/Planets/Earth';
import Jupiter from './components/Planets/Jupiter';
import Mars from './components/Planets/Mars';
import Mercury from './components/Planets/Mercury';
import Neptune from './components/Planets/Neptune';
import Saturn from './components/Planets/Saturn';
import Uranus from './components/Planets/Uranus';
import Venus from './components/Planets/Venus';

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
    RussoOne: require('./assets/fonts/RussoOne-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
        >
        <Stack.Screen name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Map" component={Map}
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
            headerTintColor: '#F1F1E6'
          }}
        />
        <Stack.Screen name="Horoscope" component={Horoscope}
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
            headerTintColor: '#F1F1E6'
          }}
        />
        <Stack.Screen name="News" component={News}
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
            headerTintColor: '#F1F1E6',
          }}
        />
        <Stack.Screen name="Details" component={Details}
          options={{
            title: "Details",
            headerTitle: "Details",
            headerTitleStyle: {
              color: 'transparent',
            },
            headerTintColor: '#F1F1E6'
          }}
        />
        <Stack.Screen name="Aquarius" component={Aquarius}
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
            headerTintColor: '#F1F1E6'
          }}
        />
        <Stack.Screen name="Pisces" component={Pisces} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Aries" component={Aries} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Taurus" component={Taurus} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Gemini" component={Gemini} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Cancer" component={Cancer} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Leo" component={Leo} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Virgo" component={Virgo} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Libra" component={Libra} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Scorpio" component={Scorpio} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Sagittarius" component={Sagittarius} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Capricorn" component={Capricorn} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Neptune" component={Neptune} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Uranus" component={Uranus} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Saturn" component={Saturn} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Jupiter" component={Jupiter} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Mars" component={Mars} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Earth" component={Earth} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Venus" component={Venus} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
        <Stack.Screen name="Mercury" component={Mercury} options={{ headerTitleStyle: { color: 'transparent', }, headerTintColor: '#F1F1E6' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}