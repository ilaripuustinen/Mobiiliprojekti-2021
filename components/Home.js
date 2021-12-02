import React from 'react';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import styles from '../styles/styles';

export default function Home({ navigation }) {

  return (
    <ImageBackground source={require("../assets/Images/map/Map.png")} resizeMode="cover" style={styles.background}>
      <View style={styles.container}>
        {/* <div style={{ height: 200 }}> */}
          <View>
            <Image
              source={'./assets/logoilarille.png'} />
          </View>
        {/* </div> */}
        <div style={{
          display: 'inline-block',
          justifyContent: 'center',
          marginLeft: 50,
          marginRight: 50,
        }}>
          <Pressable
            style={styles.text}
            color={'transparent'}
            title="Planets"
            onPress={() => navigation.navigate('Planets')}>
            Planets
          </Pressable>
          <Pressable
            style={styles.text}
            color={'transparent'}
            title="Horoscope"
            onPress={() => navigation.navigate('Horoscope')}>
            Horoscope
          </Pressable>
          <Pressable
            style={styles.text}
            color={'transparent'}
            title="Map"
            onPress={() => navigation.navigate('Map')}>
            Map
          </Pressable>
        </div>
      </View>
    </ImageBackground>
  );
}