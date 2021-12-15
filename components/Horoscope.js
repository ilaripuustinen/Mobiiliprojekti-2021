import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Pressable, ScrollView } from 'react-native';
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
        <ScrollView>
            <ImageBackground source={require("../assets/HoroBackground.png")} resizeMode="cover" style={styles.hsbackground}>
                {/* <View style={{paddingTop: 25}}></View> */}
                <Text style={ styles.hsTitle }>Daily Horoscope</Text>
                <View style={{paddingBottom: 40}}></View>
                <View style={styles.hsstyle}>
                    <Pressable onPress={() => navigation.navigate('Aquarius')}>
                        <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/AquariusNappi.png")} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Pisces')}>
                        <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/PiscesNappi.png")} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Aries')}>
                        <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/AriesNappi.png")} />
                    </Pressable>
                    
                </View>
                <View style={styles.hsstyle}>
                    <Pressable onPress={() => navigation.navigate('Taurus')}>
                        <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/TaurusNappi.png")} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Gemini')}>
                        <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/GeminiNappi.png")} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Cancer')}>
                        <Image style={ styles.hsImage } source={require("../assets/Images/HoroscopeButtons/CancerNappi.png")} />
                    </Pressable>
                </View>
                <View style={styles.hsstyle}>
                    <Pressable onPress={() => navigation.navigate('Leo')}>
                        <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/LeoNappi.png")} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Virgo')}>
                        <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/VirgoNappi.png")} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Libra')}>
                        <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/LibraNappi.png")} />
                    </Pressable>
                    
                    
                </View>
                <View style={styles.hsstyle}>
                    <Pressable onPress={() => navigation.navigate('Scorpio')}>
                        <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/ScorpioNappi.png")} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Sagittarius')}>
                    <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/SagittariusNappi.png")} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Capricorn')}>
                        <Image style={styles.hsImage} source={require("../assets/Images/HoroscopeButtons/CapricornNappi.png")} /> 
                    </Pressable>    
                </View>
                <View style={{paddingBottom: 150}}></View>
            {/* <map name="hsmap">
                <area shape="circle" coords="570,570,130" alt="Aquarius" onClick={() => navigation.navigate('Aquarius')}></area>
            </map> */}
            {/* <View style={{paddingBottom: 200}}></View> */}
        </ImageBackground>
        </ScrollView>
        
    )
}