import React from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import ScrollContainer from "react-indiana-drag-scroll";
import VisibilitySensor from 'react-visibility-sensor';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const planets = document.querySelectorAll("planet")



export default function Map({ navigation }) {

    function onChange(isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');

    }


    return (
        <View style={styles.container}>

            <ImageBackground source={require("../assets/Images/map/Map.png")} resizeMode="cover" style={styles.background}>


                <ScrollContainer className="container">

                    <VisibilitySensor onChange={onChange} offset={{top:130, bottom:130}}>
                        {({ isVisible }) => {
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Neptune.png")} style={{
                                        width: isVisible ? 120 : 100,
                                        height: isVisible ? 120 : 100,
                                        marginBottom: isVisible ? 30 : 40,
                                        marginTop: isVisible ? 70 : 80,


                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{top:130, bottom:130}}>
                        {({ isVisible }) => {
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Uranus.png")} style={{
                                        width: isVisible ? 120 : 100,
                                        height: isVisible ? 120 : 100,
                                        marginBottom: isVisible ? 30 : 40,
                                        marginTop: isVisible ? 10 : 20,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{top:130, bottom:130}}>
                        {({ isVisible }) => {
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

                    <VisibilitySensor onChange={onChange} offset={{top:130, bottom:130}}>
                        {({ isVisible }) => {
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Jupiter.png")} style={{
                                        width: isVisible ? 340 : 320,
                                        height: isVisible ? 340 : 320,
                                        marginBottom: isVisible ? 30 : 40,
                                        marginTop: isVisible ? 10 : 20,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{top:130, bottom:130}}>
                        {({ isVisible }) => {
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Mars.png")} style={{
                                        width: isVisible ? 110 : 90,
                                        height: isVisible ? 110 : 90,
                                        marginBottom: isVisible ? 30 : 40,
                                        marginTop: isVisible ? 10 : 20,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{top:130, bottom:130}}>
                        {({ isVisible }) => {
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Earth.png")} style={{
                                        width: isVisible ? 120 : 100,
                                        height: isVisible ? 120 : 100,
                                        marginBottom: isVisible ? 20 : 30,
                                        marginTop: isVisible ? 10 : 20,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{top:130, bottom:130}}>
                        {({ isVisible }) => {
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Venus.png")} style={{
                                        width: isVisible ? 120 : 100,
                                        height: isVisible ? 120 : 100,
                                        marginBottom: isVisible ? 60 : 70,
                                        marginTop: isVisible ? 10 : 20,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>

                    <VisibilitySensor onChange={onChange} offset={{top:130, bottom:130}}>
                        {({ isVisible }) => {
                            return (
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Mercury.png")} style={{
                                        width: isVisible ? 90 : 70,
                                        height: isVisible ? 90 : 70,
                                        marginBottom: isVisible ? 240 : 250,
                                        marginTop: isVisible ? 10 : 20,
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    </VisibilitySensor>


                </ScrollContainer>
            </ImageBackground>

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
    }
})