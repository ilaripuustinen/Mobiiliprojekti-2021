import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, ScrollView, SafeAreaView, Dimensions, Pressable } from 'react-native';


export default function Map({ navigation }) {


    return (
        <ImageBackground source={require("../assets/Images/MapBackground.jpg")} resizeMode="cover" style={styles.background}>

            <View style={styles.container}>


                <ScrollView keyboardShouldPersistTaps="always"
                    contentContainerStyle={{ alignItems: 'center', alignSelf: 'stretch', }}>

                    <Image source={require("../assets/Images/map/Sun4.png")} style={{
                        width: 420,
                        height: 430,
                        marginTop: 100,
                        position: "absolute",
                        bottom: 0
                    }}>

                    </Image>
                    <Pressable onPress={() => navigation.navigate('Neptune')}>
                        <Image source={require("../assets/Images/map/NeptuneTeksti.png")} style={{
                            width: 160,
                            height: 160,
                            marginTop: 130

                        }} />
                    </Pressable>


                    <TouchableOpacity onPress={() => navigation.navigate('Uranus')}>
                        <Image source={require("../assets/Images/map/UranusTeksti.png")} style={{
                            width: 160,
                            height: 160,
                            marginTop: 60,
                            marginBottom: 20
                        }} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate('Saturn')}>
                        <Image source={require("../assets/Images/map/SaturnTeksti.png")} style={{
                            width: 380,
                            height: 250,
                            maringTop: 80,
                            marginTop: 20

                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Jupiter')}>
                        <Image source={require("../assets/Images/map/JupiterTeksti.png")} style={{
                            width: 400,
                            height: 400,
                            marginTop: 40
                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Mars')}>
                        <Image source={require("../assets/Images/map/MarsTeksti.png")} style={{
                            width: 160,
                            height: 160,
                            marginTop: 60,
                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Earth')}>
                        <Image source={require("../assets/Images/map/EarthTeksti.png")} style={{
                            width: 230,
                            height: 230,
                            marginTop: 60,
                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Venus')}>
                        <Image source={require("../assets/Images/map/VenusTeksti.png")} style={{
                            width: 230,
                            height: 230,
                            marginTop: 40,
                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Mercury')}>
                        <Image source={require("../assets/Images/map/MercuryTeksti.png")} style={{
                            width: 160,
                            height: 160,
                            marginTop: 40,
                            marginBottom: 250
                        }} />
                    </TouchableOpacity>


                </ScrollView>

            </View>
        </ImageBackground>
    );


}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    container: {
        width: "auto",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    background: {
        flex: 1,
        justifyContent: "center"
    },
    planet: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    planetVisible: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 120,
        height: 120,

    },
    planetInvisible: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 100,
        height: 100,

    },
    topView: {
        paddingBottom: 200,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        color: "white",
        /* Height of the footer*/
        height: 40,
    },
    topText: {
        fontSize: 30,
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    topTextNeptune: {
        fontSize: 30,
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',

    }
})