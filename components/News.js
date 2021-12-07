import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView } from 'react-native';

export default function News() {
    const [item, setItem] = useState([]);



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
