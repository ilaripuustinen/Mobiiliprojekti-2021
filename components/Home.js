import React from 'react';
import { View, Text, Image, Button, ImageBackground } from 'react-native';
import styles from '../styles/styles';

export default function Home({ navigation }) {

  return (
    <ImageBackground source={require("../assets/Images/map/Map.png")} resizeMode="cover" style={styles.background}>
      <View style={styles.container}>
        <div style={{
          display: 'inline-block', paddingTop: 50
        }}>
          <div style={{ padding: 15 }}>
            <Text
              style={styles.text}
              color={'transparent'}
              title="Planets"
              onPress={() => navigation.navigate('Planets')}>
              Planets</Text>
          </div>
          <div style={{ padding: 15 }}>
            <Text
              style={styles.text}
              color={'transparent'}
              title="Horoscope"
              onPress={() => navigation.navigate('Horoscope')}>
              Horoscope</Text>
          </div>
          <div style={{ padding: 15 }}>
            <Text
              style={styles.text}
              color={'transparent'}
              title="Map"
              onPress={() => navigation.navigate('Map')}>
              Map</Text>
          </div>
        </div>
      </View>
    </ImageBackground>
  );
}