import React from 'react';
import { View, Image, ImageBackground, Pressable, Text } from 'react-native';
//import "@fontsource/russo-one"
import styles from '../styles/styles';

export default function Home({ navigation }) {

  return (
    <ImageBackground source={require("../assets/Images/FrontpageBackground.png")} resizeMode="cover" style={styles.background}>

      <View style={styles.container}>
        
          <View style={{justifyContent:'center'}} >
            <Image 
              source={require('../assets/Images/pitkälogo.png')} style={styles.frontpageLogo} />
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
            title="Map"
            onPress={() => navigation.navigate('Map')}>
            <Image source={require('../assets/Images/Solarsystemnappi.png')} style={styles.frontpageButton} />
          </Pressable>

          <Pressable
            style={styles.text}
            color={'transparent'}
            title="Horoscope"
            onPress={() => navigation.navigate('Horoscope')}>
            <Image source={require('../assets/Images/HoroscopeNappi.png')} style={styles.frontpageButton} />
          </Pressable>

          <Pressable
            style={styles.text}
            color={'transparent'}
            title="Planets"
            onPress={() => navigation.navigate('News')}>
            <Image source={require('../assets/Images/SpacenewsNappi.png')} style={styles.frontpageButton} />
          </Pressable>




        </div>

        <Image source={require('../assets/Images/smallEarth.png')} style={{ width: 500, height: 260, bottom: 0 }}></Image>
      </View>
    </ImageBackground>
  );
}