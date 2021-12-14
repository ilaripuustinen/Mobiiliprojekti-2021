import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import styles from '../../styles/styles';

export default function Venus() {

 
  const [planet, setPlanet] = useState([]);
  const [moons, setMoons] = useState('');

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=id,eq,venus')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.bodies);
        const temp = Array();
        json.bodies.forEach(element => {
          if (element.isPlanet && element.name.startsWith('(') === false) {
            console.log(element.name);
            temp.push(element)
          } if (element.moons == null) {
            setMoons(0)
          }
        });
        setPlanet(temp);
      })

  }, []);

  return (

    <View style={styles.container}>

      <Text>Venus</Text>

      {planet.map(planet => (
        <Text>Semimajor Axis: {planet.semimajorAxis} km</Text>
      ))}
      {planet.map(planet => (
        <Text>Mean radius: {planet.meanRadius} km</Text>
      ))}
      {planet.map(planet => (
        <Text>Gravity: {planet.gravity} m.s-2</Text>
      ))}
      {planet.map(planet => (
        <Text>Mass: {planet.mass.massValue} 10nkg</Text>
      ))}
      {planet.map(planet => (
        <Text>Axial tilt: {planet.axialTilt}°</Text>
      ))}
      
        <Text>Number of moons: {moons}</Text>
     
    </View>

  )
  };