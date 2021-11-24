import { DarkTheme, NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import Frontpage from './components/Frontpage';
import Planet from './components/Planet';
import Horoscope from './components/Horoscope';
import aquarius from './components/HoroscopePages/aquarius';
import FetchApi from './components/FetchApi';
import IlarinDemot from './components/IlarinDemot';
import Map from './components/Map';
import StyleSheet from './style/style';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
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
    <ImageBackground
    style={StyleSheet.container}
    source={require('./assets/space.jpg')}
    resizeMode='stretch'>
      <NavigationContainer theme={MyTheme}>
        {/* Jos haluaa navigation näkyviin, poista screenoptions */}
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Frontpage} />
          <Stack.Screen name="Planets" component={Planet} />
          <Stack.Screen name="FetchApi" component={FetchApi} />
          <Stack.Screen name="Ilarin Demot" component={IlarinDemot} />
          <Stack.Screen name="Horoscope" component={Horoscope} />
          <Stack.Screen name="aquarius" component={aquarius} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>

  );
}