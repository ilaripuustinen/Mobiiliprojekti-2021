import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, ScrollView, SafeAreaView, Dimensions  } from 'react-native';
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native'

/* import FadeInOut from 'react-native-fade-in-out'; */





export default function Map({ navigation }) {

    const [planetName1, setPlanetName1] = useState("");
    const [planetName2, setPlanetName2] = useState("");
    const [planetName3, setPlanetName3] = useState("");
    const [planetName4, setPlanetName4] = useState("");
    const [planetName5, setPlanetName5] = useState("");
    const [planetName6, setPlanetName6] = useState("");
    const [planetName7, setPlanetName7] = useState("");
    const [planetName8, setPlanetName8] = useState("");
    const [height, setHeight] = useState("100");
    /*     const [visible1, setVisible1] = useState(false); */

    function onChange(isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
        isVisible ? setHeight("200") : setHeight("100");

    }


    return (
        <ImageBackground source={require("../assets/Images/MapBackground.jpg")} resizeMode="cover" style={styles.background}>
            {/*             <View >
                <Text style={{ color: "white" }}>{height}</Text>
                <View style={styles.container}>
                    <VisibilitySensor onChange={onChange}>
                        <Image
                            style={{ height: 200, width: 200 }}
                            source={require("../assets/Images/map/Neptune.png")}
                        />
                    </VisibilitySensor>
                </View>
                <Text style={{ color: "white" }}>{height}</Text>
                <View style={styles.container}>
                    <VisibilitySensor onChange={onChange}>
                        <Image
                            style={{ height: 200, width: 200 }}
                            source={require("../assets/Images/map/Neptune.png")}
                        />
                    </VisibilitySensor>
                </View> */}
            <View style={styles.container}>

             
                    <ScrollView contentContainerStyle={{ alignItems: 'center',    alignSelf: 'stretch', }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Neptune')}>
                            <Image source={require("../assets/Images/map/Neptune.png")} style={{
                                width: 120,
                                height: 120,
                                marginTop: 400
                            }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Neptune')}>
                            <Image source={require("../assets/Images/map/Uranus.png")} style={{
                                width: 120,
                                height: 120,
                                marginTop: 60,
                                marginBottom: 20
                            }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Neptune')}>
                            <Image source={require("../assets/Images/map/Saturn.png")} style={{
                                width: 360,
                                height: 230,
                                maringTop: 80
                            }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Neptune')}>
                            <Image source={require("../assets/Images/map/Jupiter.png")} style={{
                                width: 400,
                                height: 400,
                            }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Neptune')}>
                            <Image source={require("../assets/Images/map/Mars.png")} style={{
                                width: 120,
                                height: 120,
                                marginTop: 40,
                            }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Neptune')}>
                            <Image source={require("../assets/Images/map/Earth.png")} style={{
                                width: 200,
                                height: 200,
                                marginTop: 60,
                            }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Neptune')}>
                            <Image source={require("../assets/Images/map/Venus.png")} style={{
                                width: 210,
                                height: 210,
                                marginTop: 40,
                            }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Neptune')}>
                            <Image source={require("../assets/Images/map/Mercury.png")} style={{
                                width: 120,
                                height: 120,
                                marginTop: 40,
                                marginBottom: 250
                            }} />
                        </TouchableOpacity>

                        <Image source={require("../assets/Images/map/Sun.png")} style={{
                            width: 420,
                            height: 400,
                            marginTop: 100,
                            position: "absolute",
                            bottom: 0
                        }}>

                        </Image>
                    </ScrollView>

            </View>
        </ImageBackground>);
    {/* 

                <VisibilitySensor onChange={onChange} offset={{ top: -20, bottom: 30 }} style={{ height: 100 }}>
                    {({ isVisible }) => {
                        isVisible ? setPlanetName1("Neptune") : setPlanetName1("")
                        return (
                            <View style={{
                                paddingBottom: isVisible ? 10 : 20,
                                paddingTop: isVisible ? 220 : 270,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 100

                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    color: "white",
                                }}>
                                    {planetName1}
                                </Text>

                                <TouchableOpacity onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Neptune.png")} style={{
                                        width: isVisible ? 120 : 100,
                                        height: isVisible ? 120 : 100,
                                    }} />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                </VisibilitySensor> */}


    {/*                 <VisibilitySensor onChange={onChange} offset={{ top: 180, bottom: 180 }}>
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
                </VisibilitySensor> */}

    {/*                     <VisibilitySensor onChange={onChange} offset={{ top: 130, bottom: 130 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName3("Saturn") : setPlanetName3("")
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
                                        {planetName3}
                                    </Text>
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Saturn.png")} style={{
                                        width: isVisible ? 320 : 300,
                                        height: isVisible ? 160 : 140,
                                    }} />
                                </TouchableOpacity>
                                </View>
                            )
                        }}
                    </VisibilitySensor> */}

    {/*                     <VisibilitySensor onChange={onChange} offset={{ top: 70, bottom: 70 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName4("Jupiter") : setPlanetName4("")
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
                                        {planetName4}
                                    </Text>
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Jupiter.png")} style={{
                                        width: isVisible ? 320 : 300,
                                        height: isVisible ? 320 : 300,
                                    }} />
                                </TouchableOpacity>
                                </View>
                            )
                        }}
                    </VisibilitySensor> */}
    {/* 
                    <VisibilitySensor onChange={onChange} offset={{ top: 170, bottom: 140 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName5("Mars") : setPlanetName5("")
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
                                        {planetName5}
                                    </Text>
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Mars.png")} style={{
                                        width: isVisible ? 110 : 90,
                                        height: isVisible ? 110 : 90,
                                    }} />
                                </TouchableOpacity>
                                </View>
                            )
                        }}
                    </VisibilitySensor> */}

    {/*                     <VisibilitySensor onChange={onChange} offset={{ top: 130, bottom: 130 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName6("Earth") : setPlanetName6("")
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
                                        {planetName6}
                                    </Text>
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Earth.png")} style={{
                                        width: isVisible ? 120 : 100,
                                        height: isVisible ? 120 : 100,
                                    }} />
                                </TouchableOpacity>
                                </View>
                            )
                        }}
                    </VisibilitySensor> */}

    {/*                     <VisibilitySensor onChange={onChange} offset={{ top: 130, bottom: 130 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName7("Venus") : setPlanetName7("")
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
                                        {planetName7}
                                    </Text>
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Venus.png")} style={{
                                        width: isVisible ? 120 : 100,
                                        height: isVisible ? 120 : 100,
                                    }} />
                                </TouchableOpacity>
                                </View>
                            )
                        }}
                    </VisibilitySensor>
 */}
    {/*                     <VisibilitySensor onChange={onChange} offset={{ top: 10, bottom: 0 }}>
                        {({ isVisible }) => {
                            isVisible ? setPlanetName8("Mercury") : setPlanetName8("")
                            return (
                                <View style={{
                                    paddingBottom: isVisible ? 340 : 350,
                                    paddingTop: isVisible ? 10 : 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 30,
                                        color: "white",
                                    }}>
                                        {planetName8}
                                    </Text>
                                <TouchableOpacity style={styles.planet} onPress={() => navigation.navigate('Neptune')}>
                                    <Image source={require("../assets/Images/map/Mercury.png")} style={{
                                        width: isVisible ? 90 : 70,
                                        height: isVisible ? 90 : 70,
                                    }} />
                                </TouchableOpacity>
                                </View>
                            )
                        }}
                    </VisibilitySensor>
 */}




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