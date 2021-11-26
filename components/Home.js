import React from 'react';
import { View, Text, Image, Button, ImageBackground } from 'react-native';
import styles from '../styles/styles';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
       {/* <ImageBackground source={require("../assets/Images/map/Map.png")} resizeMode="cover" style={styles.background}> */}
      <Text style={styles.text}>Home screen</Text>
      <div>
      <Button
          color={'transparent'}
          title="Planets"
          onPress={() => navigation.navigate('Planets')}
        />
        </div>
      <Button
        color={'transparent'}
        title="FetchApi"
        onPress={() => navigation.navigate('FetchApi')}
      />
      <Button
        color={'transparent'}
        title="Ilarin Demot"
        onPress={() => navigation.navigate('Ilarin Demot')}
      />
      <Button
        color={'transparent'}
        title="Horoscope"
        onPress={() => navigation.navigate('Horoscope')}
      />
      <Button
        color={'transparent'}
        title="Map"
        onPress={() => navigation.navigate('Map')}
      />
      {/* </ImageBackground> */}
    </View>
  );
}