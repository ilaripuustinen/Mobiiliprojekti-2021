import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import styles from '../style/style';

export default function Frontpage() {

    return (
    <View style={styles.container}>
       <h1>Apin nimi</h1>
       <a href="/Planet">Planeetat</a>
    </View>
    )
}
