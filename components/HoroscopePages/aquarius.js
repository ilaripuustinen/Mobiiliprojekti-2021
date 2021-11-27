import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import väliaikakuva from "../../assets/favicon.png"
import styles from '../../styles/styles';

export default function aquarius() {
    return (
        <View>
            <ImageBackground source={require("../../assets/HoroscopeBackground.png")} resizeMode="cover" style={styles.background}>
            <div style={{ alignSelf: 'center', marginTop: 100 }}>
                <img height={200} src={väliaikakuva}></img>
            </div>
            <div>
                <h1 style={{textAlign: 'center', color: 'white'}}>Aquarius</h1>
            </div>
            </ImageBackground>
        </View>
    )
}
