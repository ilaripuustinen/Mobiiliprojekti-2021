import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StyleSheet from '../style/style';

export default function Frontpage({ navigation }) {

  return (
    <View style={StyleSheet.container}>
        <Button
        style={{fontSize:'30px !important'}}
          color={'transparent'}
          title="Planets"
          onPress={() => navigation.navigate('Planets')}
        />
        <Button
          color={'transparent'}
          title="FetchApi"
          onPress={() => navigation.navigate('FetchApi')}
        />
        <Button
          color={'transparent'}
          title="Ilarin Demot"
          onPress={() => navigation.navigate('Ilarin Demot')}
        />
        <Button
          color={'transparent'}
          title="Horoscope"
          onPress={() => navigation.navigate('Horoscope')}
        />
        <Button
          color={'transparent'}
          title="Map"
          onPress={() => navigation.navigate('Map')}
        />
    </View>
  );
}