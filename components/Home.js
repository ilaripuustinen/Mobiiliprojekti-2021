import React from 'react';
import { View, Image, ImageBackground, Pressable } from 'react-native';
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
            Solar System
          </Pressable>
          <Pressable
            style={styles.text}
            color={'transparent'}
            title="News"
            onPress={() => navigation.navigate('News')}>
            News
          </Pressable>
          {/* <Pressable
            style={styles.text}
            color={'transparent'}
            title="Planets"
            onPress={() => navigation.navigate('Planets')}>
            Planets
          </Pressable> */}
          <Pressable
            style={styles.text}
            color={'transparent'}
            title="Horoscope"
            onPress={() => navigation.navigate('Horoscope')}>
            Horoscope
          </Pressable>
          
        </div>
      </View>
    </ImageBackground>
  );
}