import React from 'react';
import { Text, View, Image, SectionList } from 'react-native';

export default function Planet() {
    return (
        <View>
            <Text>Title</Text>
            <Text>Description</Text>
            <Image></Image>
            <SectionList 
                // data lista, käyttöohje: https://reactnative.dev/docs/sectionlist
            />
        </View>
    )
}
