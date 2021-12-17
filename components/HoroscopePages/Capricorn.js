import React, { Component, useEffect, useState } from 'react'
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native'
import capricornImage from "../../assets/Images/Horoscope/CapricornPicture.png"
import styles from '../../styles/styles';

export default function Capricorn() {

    
    const [loading, setLoading] = useState(true)
    const [todayHS, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1300)           //  <== latausruutua
        fetch('https://ohmanda.com/api/horoscope/capricorn/', {
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
                <ImageBackground source={require("../../assets/HoroBackground.png")} resizeMode="cover" style={styles.hsbackground}>
                    <ScrollView>
                        <View style={{ alignSelf: 'center', marginTop: 40 }}>
                            <Image style={{ width: 350, height: 350, }} source={capricornImage}></Image>
                        </View>
                        <View>
                            <Text style={styles.horoTitle}>Capricorn</Text>
                            <Text style={styles.hstext}>{todayHS["date"]}</Text>
                        </View>
                        <Text style={styles.hstext}>{todayHS["horoscope"]}</Text>
                        <View style={{ paddingBottom: 50 }}>
                        </View>
                    </ScrollView>
                </ImageBackground>
            ) : (
                    <ImageBackground source={require("../../assets/HoroBackground.png")} resizeMode="cover" style={styles.background}>
                        <View>
                        <Image style={ styles.loadingLogo } source={require("../../assets/logoilarille.png")}></Image>
                        <Text style={ styles.hstext }>Loading</Text>
                        </View>
                    </ImageBackground>
                    
              )}
            </>
    );
}

