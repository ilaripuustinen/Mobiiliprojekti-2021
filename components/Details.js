import React, { useEffect, useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from '../styles/styles';

export default function Details({ route, navigation }) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [source, setSource] = useState('');

    useEffect(() => {
        if (route.params?.news) {
            setTitle(route.params.news.title);
            setImage(route.params.news.imageUrl);
            setDescription(route.params.news.summary);
            setSource(route.params.news.newsSite)
        }
    }, [route.params?.news])

    return (
        <ImageBackground source={require("../assets/Images/NewsBackground.png")} resizeMode="cover" style={styles.background}>
            <View style={styles.newsContainer}>
                <Text style={styles.newsHeadline}>{title}</Text>
                {image.length > 0 &&
                    <View style={styles.imageWrapper}>
                        <Image style={styles.newsImage} source={{ uri: image, }} />
                    </View>
                }
                <Text style={styles.newsSite}>{description}</Text>
                <Text style={styles.newsSite}>Source: {source}</Text>
            </View>
        </ImageBackground >
    )
}
