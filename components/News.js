import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView, Pressable, ImageBackground } from 'react-native';
import styles from '../styles/styles';

export default function News({ navigation }) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v3/articles')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setItem(json);
            })
    }, []);


    return (
        <ImageBackground source={require("../assets/Images/NewsBackground.png")} resizeMode="cover" style={styles.background}>

            <View style={styles.newsContainer}>
                <ScrollView >
                    {item.map(item => (
                        <Pressable key={item.title} onPress={() => navigation.navigate('Details', { news: item })}>
                            <View style={{marginBottom: 30}}>
                                
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.thumbnail} source={{ uri: item.imageUrl, }} />
                                </View>
                                <Text style={styles.newsHeadline}>{item.title}</Text>
                                <Text style={styles.newsSite}>{item.newsSite}</Text>
                            </View>
                            <View
                           
                            />
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
        </ImageBackground >
    );
}
