import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/styles';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

export default function Horoscope({ navigation }) {

    const hsRef = useRef();
    useEffect(() => {
        gsap.to(hsRef.current, { rotation: "-=840", duration: 300 });
        const rotationSnap = 360 / 14;
        Draggable.create('#hsimage', {
            type: 'rotation',
            dragClickables: true,
            snap: (endValue) => Math.round(endValue / rotationSnap) * rotationSnap, // <==EI TOIMI
        })
        const script = document.createElement('script');
        script.src = imageMapResizer();

    });
    var imageMapResizer = require("image-map-resizer")

    return (
        <View>
            <ImageBackground source={require("../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.background}>
            <div>
                <h1 style={{textAlign: 'center', marginTop: 50, color: 'white'}}>Daily Horoscope</h1>
            </div>
            <img id="hsimage" style={{ position: 'relative' }} useMap="#hsmap" ref={hsRef} src={require("../assets/wheel.png")} />
            <map name="hsmap">
                <area shape="circle" coords="570,570,130" alt="aquarius" onClick={() => navigation.navigate('aquarius')}></area>
            </map>
            <p id="value">0</p>
        </ImageBackground>
        </View>
        
    )
}