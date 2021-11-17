import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../style/style';

export default function Frontpage({ navigation }) {

    return (
        <View  style={styles.container}>
          <Button
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
        </View>
      );
}
