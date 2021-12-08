import React, { Component, useEffect, useState } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import aquariusImage from "../../assets/Images/Horoscope/Aquarius.png"
import styles from '../../styles/styles';

export default function aquarius() {

    
    const [loading, setLoading] = useState(true)
    const [todayHS, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1300)           //  <== latausruutua
        fetch('https://ohmanda.com/api/horoscope/aquarius/', {
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
                    <ImageBackground source={require("../../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.background}>
                        <View style={{ alignSelf: 'center', marginTop: 100 }}>
                            <img height={300} src={aquariusImage}></img>
                        </View>
                        <View>
                            <h1 style={{ textAlign: 'center', color: 'white' }}>Aquarius</h1>
                        </View>
                        <Text style={styles.hstext}>{todayHS["horoscope"]}</Text>
                        <View style={{ paddingBottom: 200 }}>
                        </View>
                    </ImageBackground>
                </View>
            ) : (
                    <ImageBackground source={require("../../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.background}>
                        <View>
                        <h1 style={{ textAlign: 'center', color: 'white' }}>Loading</h1>
                        </View>
                    </ImageBackground>
                    
              )}
            </>
    );
}
