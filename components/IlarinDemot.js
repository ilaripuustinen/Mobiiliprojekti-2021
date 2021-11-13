// TÄMÄ ON DEMOSIVU NAVIGAATIOTA VARTEN

import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../style/style';

export default function IlarinDemo({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ilarin rölöm demot, menkää pois, mä koodaan :(</Text>
      <Button
        title="Go to Demos... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
