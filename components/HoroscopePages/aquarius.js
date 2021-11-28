import React, { Component, useEffect, useState } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import aquariusImage from "../../assets/Images/map/Horoscope/Aquarius.png"
import styles from '../../styles/styles';

export default function aquarius() {

    const [todayHS] = useState([]);
    fetch("https://horoscope-api.herokuapp.com/horoscope/today/Aquarius")
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        })
    

    return (
        <View>
            <ImageBackground source={require("../../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.background}>
                <div style={{ alignSelf: 'center', marginTop: 100 }}>
                    <img height={300} src={aquariusImage}></img>
                </div>
                <div>
                    <h1 style={{ textAlign: 'center', color: 'white' }}>Aquarius</h1>
                </div>
                <Text style={styles.hstext}>Horoskooppi API teksti tulee tähän</Text>
                <div style={{ paddingBottom: 800 }}>
                </div>
            </ImageBackground>
        </View>
    )
}
