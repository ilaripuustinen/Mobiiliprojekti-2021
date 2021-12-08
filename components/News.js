import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView, Pressable } from 'react-native';
import styles from '../styles/styles';

export default function News({navigation}) {
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
        <View style={styles.container}>
            <ScrollView>
                {item.map(item => (
                    <Pressable key={item.title} onPress={() => navigation.navigate('Details',{news:item})}>
                    <View>
                        <Text>{item.title}</Text>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.thumbnail} source={{ uri: item.imageUrl, }} />
                        </View>
                        <Text>{item.newsSite}</Text>
                    </View>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}
