import React, { Component, useEffect, useState } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import piscesImage from "../../assets/Images/Horoscope/Pisces.png"
import styles from '../../styles/styles';

export default function Pisces() {

    
    const [loading, setLoading] = useState(true)
    const [todayHS, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1300)           //  <== latausruutua
        fetch('https://ohmanda.com/api/horoscope/pisces/', {
            // mode: 'cors',
            // credentials: 'include'
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((todayHS) => {
                setData(todayHS);
        })
    }, []);
    
    return (
        <>
            {loading === false ? (   //latausruuta
                <View>
                    <ImageBackground source={require("../../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.hsbackground}>
                        <View style={{ alignSelf: 'center', marginTop: 100 }}>
                            <Image style={{width: 200, height: 200,}} source={piscesImage}></Image>
                        </View>
                        <View>
                            <Text style={ styles.hstext }>Pisces</Text>
                        </View>
                        <Text style={styles.hstext}>{todayHS["horoscope"]}</Text>
                        <View style={{ paddingBottom: 200 }}>
                        </View>
                    </ImageBackground>
                </View>
            ) : (
                    <ImageBackground source={require("../../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.background}>
                        <View>
                        <Image style={ styles.loadingLogo } source={require("../../assets/logoilarille.png")}></Image>
                        <Text style={ styles.hstext }>Loading</Text>
                        </View>
                    </ImageBackground>
                    
              )}
            </>
    );
}

