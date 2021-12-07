import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView } from 'react-native';

export default function News() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("https://space-news.p.rapidapi.com/news", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "space-news.p.rapidapi.com",
                "x-rapidapi-key": "a510eb0a25mshc2d63cdae0e2100p14d0eajsnda18b271c9e3"
            }
        })
            .then(response => {
                console.log(response);
                setItem(response);
            })
            .catch(err => {
                console.error(err);
            });
    })

    return (
        <View>
            <ScrollView>
                {item.map(item =>(
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
