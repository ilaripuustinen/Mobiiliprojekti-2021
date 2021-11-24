import React from "react";
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import ScrollContainer from "react-indiana-drag-scroll";
import VisibilitySensor from 'react-visibility-sensor';


const planets = document.querySelectorAll("planet")

function onChange(isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');

}

export default function App() {




    return (
        <View style={styles.container}>

            <ImageBackground source={require("../assets/Images/map/Map.png")} resizeMode="cover" style={styles.background}>
                <ScrollContainer className="container">
                    <Neptune />
                    <Uranus />
                    <Saturn />
                    <Jupiter />
                    <Mars />
                    <Earth />
                    <Venus />
                    <Mercury />
                </ScrollContainer>
            </ImageBackground>

        </View>
    );
}


const Neptune = () => (
    <VisibilitySensor onChange={onChange}>
        <View style={styles.planet}>
            <Image source={require("../assets/Images/map/Neptune.png")} style={{ width: 100, height: 100, marginBottom: 30, marginTop: 70 }} />
        </View>
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
);

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
})