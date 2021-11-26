// TÄMÄ ON DEMOSIVU NAVIGAATIOTA VARTEN

import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/styles';
import style from '../styles/styles';

export default function IlarinDemo({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Ilarin rölöm demot, menkää pois, mä koodaan :(</Text>
      <Button
        color={'transparent'}
        title="Go to Demos... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
      color={'transparent'}
       title="Go to Home" 
       onPress={() => navigation.navigate('Home')} />
      <Button
      color={'transparent'}
      title="Go back" 
      onPress={() => navigation.goBack()} />
    </View>
  );
}
