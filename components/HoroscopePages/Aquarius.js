import React, { Component, useEffect, useState } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import aquariusImage from "../../assets/Images/Horoscope/Aquarius.png"
import styles from '../../styles/styles';

export default function Aquarius() {

    
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
                    <ImageBackground source={require("../../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.hsbackground}>
                        <View style={{ alignSelf: 'center', marginTop: 100 }}>
                            <Image style={{width: 200, height: 200,}} source={aquariusImage}></Image>
                        </View>
                        <View>
                            <Text style={ styles.hstext }>Aquarius</Text>
                        </View>
                        <Text style={styles.hstext}>{todayHS["horoscope"]}</Text>
                        <View style={{ paddingBottom: 200 }}>
                        </View>
                    </ImageBackground>
                </View>
            ) : (
                    <ImageBackground source={require("../../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.background}>
                        <View>
                        <Text style={ styles.hstext }>Loading</Text>
                        </View>
                    </ImageBackground>
                    
              )}
            </>
    );
}
