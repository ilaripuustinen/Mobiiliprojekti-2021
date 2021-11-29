import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
//import styles from '.../style/style';

export default function Mars() {

 
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=id,eq,mars')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.bodies);
        const temp = Array();
        json.bodies.forEach(element => {
          if (element.isPlanet && element.name.startsWith('(') === false) {
            console.log(element.name);
            temp.push(element)
          }
        });
        setPlanet(temp);
      })

  }, []);

  return (

    <View style={styles.container}>

      <Text>Planets</Text>
      {planet.map(planet => (
        <Text>Name: {planet.name}</Text>
      ))}
      {planet.map(planet => (
        <Text>Mean radius: {planet.meanRadius}</Text>
      ))}
      {planet.map(planet => (
        <Text>Gravity: {planet.gravity}</Text>
      ))}
      {planet.map(planet => (
        <Text>Mass: {planet.mass.massValue}</Text>
      ))}
      {planet.map(planet => (
        <Text>Axial tilt: {planet.axialTilt}</Text>
      ))}
      {planet.map(planet => (
        <Text>Number of moons: {planet.moons.length}</Text>
      ))}
    </View>

  )
  };