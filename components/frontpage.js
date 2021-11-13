import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../style/style';

export default function Frontpage({ navigation }) {

    return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
            style={styles.button}
            title="Planets"
            onPress={() => navigation.navigate('Planets')}
          />
          <Button
            style={styles.button}
            title="FetchApi"
            onPress={() => navigation.navigate('FetchApi')}
          />
          <Button
            style={styles.button}
            title="Ilarin Demot"
            onPress={() => navigation.navigate('Ilarin Demot')}
          />
        </View>
      );
}
