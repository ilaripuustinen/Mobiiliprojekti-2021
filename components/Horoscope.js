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
        //     snap: (endValue) => Math.round(endValue / rotationSnap) * rotationSnap, // <==EI TOIMI
        // })
        // const script = document.createElement('script');
        // script.src = imageMapResizer();

    });
    // var imageMapResizer = require("image-map-resizer")

    return (
        <View>
            <ImageBackground source={require("../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.background}>
            
                <Text style={{textAlign: 'center', marginTop: 50, color: 'white'}}>Daily Horoscope</Text>
                <View style={{ display: 'flex',  flexWrap: 'wrap'}}>
                <Image id="hsimage" style={{ width: 100, height: 100 }} onClick={() => navigation.navigate('Aquarius')} useMap="#hsmap" ref={hsRef} source={require("../assets/Images/Horoscope/Aquarius.png")} />
                <Image id="hsimage" style={{ width: 100, height: 100 }} onClick={() => navigation.navigate('Aquarius')} useMap="#hsmap" ref={hsRef} source={require("../assets/Images/Horoscope/Aries.png")} />
                </View>
            {/* <map name="hsmap">
                <area shape="circle" coords="570,570,130" alt="Aquarius" onClick={() => navigation.navigate('Aquarius')}></area>
            </map> */}
            <View style={{paddingBottom: 200}}></View>
        </ImageBackground>
        </View>
        
    )
}