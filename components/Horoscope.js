import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/styles';

export default function Horoscope({ navigation }) {

    const hsRef = useRef();
    useEffect(() => {
        // gsap.to(hsRef.current, { rotation: "-=840", duration: 300 });
        // const rotationSnap = 360 / 14;
        // Draggable.create('#hsimage', {
        //     type: 'rotation',
        //     dragClickables: true,
        //     snap: (endValue) => Math.round(endValue / rotationSnap) * rotationSnap, // <==snap EI TOIMI
        // })
        // const script = document.createElement('script');
        // script.src = imageMapResizer();

        // ******jos meinaa palata kiekkoon vielä, laita id="hsimage" ja ref={hsRef} kuvaan******

    });
    // var imageMapResizer = require("image-map-resizer")

    return (
        <View>
            <ImageBackground source={require("../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.hsbackground}>
                <View style={{paddingTop: 25}}></View>
                <Text style={ styles.hstext }>Daily Horoscope</Text>
                <View style={{paddingBottom: 60}}></View>
                <View style={ styles.hsstyle }>
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Aquarius.png")} />
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Pisces.png")} />
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aries')} source={require("../assets/Images/Horoscope/Aries.png")} />
                    
                </View>
                <View style={ styles.hsstyle }>
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Taurus.png")} />
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Gemini.png")} />
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Cancer.png")} />
                    
                </View>
                <View style={ styles.hsstyle }>
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Leo.png")} />
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Virgo.png")} />
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Libra.png")} />
                    
                    
                </View>
                <View style={ styles.hsstyle }>
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Scorpio.png")} />
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Sagittarius.png")} />
                    <Image style={ styles.hsImage } onClick={() => navigation.navigate('Aquarius')} source={require("../assets/Images/Horoscope/Capricorn.png")} />  
                </View>
                <View style={{paddingBottom: 200}}></View>
            {/* <map name="hsmap">
                <area shape="circle" coords="570,570,130" alt="Aquarius" onClick={() => navigation.navigate('Aquarius')}></area>
            </map> */}
            {/* <View style={{paddingBottom: 200}}></View> */}
        </ImageBackground>
        </View>
        
    )
}