import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/styles';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
        {/* <Button
        style={styles.text}
          color={'transparent'}
          title="Planets"
          onPress={() => navigation.navigate('Planets')}
        /> */}
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