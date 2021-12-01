import React, { useState } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, } from 'react-native';
import ScrollContainer from "react-indiana-drag-scroll";
import VisibilitySensor from 'react-visibility-sensor';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const planets = document.querySelectorAll("planet")



export default function Map({ navigation }) {

    const [planetName1, setPlanetName1] = useState("");
    const [planetName2, setPlanetName2] = useState("");
    const [planetName3, setPlanetName3] = useState("");
    const [planetName4, setPlanetName4] = useState("");
    const [planetName5, setPlanetName5] = useState("");
    const [planetName6, setPlanetName6] = useState("");
    const [planetName7, setPlanetName7] = useState("");
    const [planetName8, setPlanetName8] = useState("");

    function onChange(isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');

    }


    return (
        <View style={styles.container}>

            <ImageBackground source={require("../assets/Images/map/Map.png")} resizeMode="cover" style={styles.background}>
                <ScrollContainer className="container">


                    <VisibilitySensor onChange={onChange} offset={{ top: -20, bottom: 30 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName1("Neptune") : setPlanetName1("")
                            return (
                                <View style={{
                                    paddingBottom: isVisible ? 10 : 20,
                                    paddingTop: isVisible ? 230 : 280,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 30,
                                        color: "white",
                                    }}>
                                        {planetName1}
                                    </Text>
                                    <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                        <Image source={require("../assets/Images/map/Neptune.png")} style={{
                                            width: isVisible ? 120 : 100,
                                            height: isVisible ? 120 : 100,
                                        }} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    </VisibilitySensor>


                    <VisibilitySensor onChange={onChange} offset={{ top: 180, bottom: 180 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName2("Uranus") : setPlanetName2("")
                            return (
                                <View style={{
                                    paddingBottom: isVisible ? 30 : 40,
                                    paddingTop: isVisible ? 10 : 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 30,
                                        color: "white",
                                    }}>
                                        {planetName2}
                                    </Text>
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Uranus.png")} style={{
                                        width: isVisible ? 120 : 100,
                                        height: isVisible ? 120 : 100,
                                    }} />
                                </TouchableOpacity>
                                </View>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{ top: 130, bottom: 130 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName3("Saturn") : setPlanetName3("")
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Saturn.png")} style={{
                                        width: isVisible ? 320 : 300,
                                        height: isVisible ? 160 : 140,
                                        marginBottom: isVisible ? 20 : 30,
                                        marginTop: isVisible ? 10 : 20,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{ top: 70, bottom: 70 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName4("Jupiter") : setPlanetName4("")
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Jupiter.png")} style={{
                                        width: isVisible ? 320 : 300,
                                        height: isVisible ? 320 : 300,
                                        marginBottom: isVisible ? 10 : 20,
                                        marginTop: isVisible ? 10 : 20,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{ top: 170, bottom: 140 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName5("Mars") : setPlanetName5("")
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Mars.png")} style={{
                                        width: isVisible ? 110 : 90,
                                        height: isVisible ? 110 : 90,
                                        marginBottom: isVisible ? 40 : 50,
                                        marginTop: isVisible ? 20 : 30,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{ top: 130, bottom: 130 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName6("Earth") : setPlanetName6("")
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Earth.png")} style={{
                                        width: isVisible ? 120 : 100,
                                        height: isVisible ? 120 : 100,
                                        marginBottom: isVisible ? 40 : 50,
                                        marginTop: isVisible ? 20 : 40,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{ top: 130, bottom: 130 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName7("Venus") : setPlanetName7("")
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Venus.png")} style={{
                                        width: isVisible ? 120 : 100,
                                        height: isVisible ? 120 : 100,
                                        marginBottom: isVisible ? 60 : 70,
                                        marginTop: isVisible ? 30 : 40,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{ top: 10, bottom: 0 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName8("Mercury") : setPlanetName8("")
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Mercury.png")} style={{
                                        width: isVisible ? 90 : 70,
                                        height: isVisible ? 90 : 70,
                                        marginBottom: isVisible ? 290 : 300,
                                        marginTop: isVisible ? 10 : 20,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                </ScrollContainer>
            </ImageBackground>
            <View style={styles.topView}>
                {/*                 <Text style={styles.topText}>
                    {planetName1}
                </Text>
                <Text style={styles.topText}>
                    {planetName2}
                </Text>
                <Text style={styles.topText}>
                    {planetName3}
                </Text>
                <Text style={styles.topText}>
                    {planetName4}
                </Text>
                <Text style={styles.topText}>
                    {planetName5}
                </Text>
                <Text style={styles.topText}>
                    {planetName6}
                </Text>
                <Text style={styles.topText}>
                    {planetName7}
                </Text>
                <Text style={styles.topText}>
                    {planetName8}
                </Text> */}
            </View>
        </View>
    );
}


/* const Neptune = ({ navigation }) => (
    <VisibilitySensor onChange={onChange}>
        <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
            <Image source={require("../assets/Images/map/Neptune.png")} style={{ width: 100, height: 100, marginBottom: 30, marginTop: 70 }} />
        </TouchableOpacity>
    </VisibilitySensor>
);

const Uranus = () => (
    <View style={styles.planet}>
        <Image source={require("../assets/Images/map/Uranus.png")} style={{ width: 100, height: 100, marginBottom: 30 }} />
    </View>
);

const Saturn = () => (
    <View style={styles.planet}>
        <Image source={require("../assets/Images/map/Saturn.png")} style={{ width: 300, height: 140 }} />
    </View>
);

const Jupiter = () => (
    <View style={styles.planet}>
        <Image source={require("../assets/Images/map/Jupiter.png")} style={{ width: 320, height: 320 }} />
    </View>
);

const Mars = () => (
    <View style={styles.planet}>
        <Image source={require("../assets/Images/map/Mars.png")} style={{ width: 90, height: 90, marginBottom: 40 }} />
    </View>
);

const Earth = () => (
    <View style={styles.planet}>
        <Image source={require("../assets/Images/map/Earth.png")} style={{ width: 100, height: 100, marginBottom: 30 }} />
    </View>
);

const Venus = () => (
    <View style={styles.planet}>
        <Image source={require("../assets/Images/map/Venus.png")} style={{ width: 100, height: 100, marginBottom: 70 }} />
    </View>
);

const Mercury = () => (
    <View style={styles.planet}>
        <Image source={require("../assets/Images/map/Mercury.png")} style={{ width: 70, height: 70, marginBottom: 250 }} />
    </View>
); */

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: "auto",
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    background: {
        flex: 1,
        blurRadius: 10,
        justifyContent: "center"
    },
    planet: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        "&:hover": {
            width: +20,
            height: +20
        }
    },

    planetVisible: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 120,
        height: 120,
        animation: "inAnimation 250ms ease-in"
    },
    planetInvisible: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 100,
        height: 100,
        animation: "outAnimation 270ms ease-out",
    },
    topView: {
        position: "fixed",
        paddingBottom: 200,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        color: "white",
        /* Height of the footer*/
        height: 40,
        background: "white"
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