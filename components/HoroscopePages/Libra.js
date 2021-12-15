import React, { Component, useEffect, useState } from 'react'
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native'
import libraImage from "../../assets/Images/Horoscope/Libra.png"
import styles from '../../styles/styles';

export default function Libra() {

    
    const [loading, setLoading] = useState(true)
    const [todayHS, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1300)           //  <== latausruutua
        fetch('https://ohmanda.com/api/horoscope/libra/', {
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
                        <View style={{ alignSelf: 'center', marginTop: 80 }}>
                            <Image style={{ width: 180, height: 180, }} source={libraImage}></Image>
                        </View>
                        <View>
                            <Text style={styles.hstext}>Libra</Text>
                        </View>
                        <Text style={styles.hstext}>{todayHS["horoscope"]}</Text>
                        <View style={{ paddingBottom: 150 }}>
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

