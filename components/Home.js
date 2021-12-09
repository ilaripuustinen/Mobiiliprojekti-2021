import React from 'react';
import { View, Image, ImageBackground, Pressable, Text, StyleSheet } from 'react-native';
import styles from '../styles/styles';

export default function Home({ navigation }) {

  return (
    <ImageBackground source={require("../assets/Images/FrontpageBackground.png")} resizeMode="cover" style={styles.background}>

      <View style={styles.frontpageContainer}>

        <View >
          <Image
            source={require('../assets/Images/pitkälogo.png')} style={styles.frontpageLogo} />
        </View>

        <Pressable
          style={styles.frontpagePressable}
          color={'transparent'}
          title="Map"
          onPress={() => navigation.navigate('Map')}>
          <Image source={require('../assets/Images/Solarsystemnappi.png')} style={styles.frontpageButton} />
        </Pressable>

        <Pressable
          style={styles.frontpagePressable}
          color={'transparent'}
          title="Horoscope"
          onPress={() => navigation.navigate('Horoscope')}>
          <Image source={require('../assets/Images/HoroscopeNappi.png')} style={styles.frontpageButton} />
        </Pressable>

        <Pressable
          style={styles.frontpagePressable}
          color={'transparent'}
          title="Planets"
          onPress={() => navigation.navigate('News')}>
          <Image source={require('../assets/Images/SpacenewsNappi.png')} style={styles.frontpageButton} />
        </Pressable>

        <Image source={require('../assets/Images/smallEarth.png')} style={{ width: "auto", height: 260, bottom: 0, justifyContent: 'center', }}></Image>
      </View>
    </ImageBackground>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  text: {
    fontFamily: 'RussoOne',
    fontSize: 30,
    color: '#DD2A2A',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopStartRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  background: {
      flex: 1,
      justifyContent: "center"
  },
  hstext: {
    fontFamily: 'Merriweather',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
  },

  frontpageLogo: {
    flex: 1,
    height: 100,
    marginBottom: 40,
    marginTop: 60
  },
  frontpageButton: {
    flex: 1,
    height: 110,
    width: 260,
    alignContent: 'center',
  },
  thumbnail: {
    width: 250,
    height: 250,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  newsImage: {
    width: 350,
    height: 350,
    marginBottom: 10,
  }
}); */