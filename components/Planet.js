import React, { useEffect, useState } from 'react';
import { Text, View, Image, Pressable, ScrollView } from 'react-native';
import styles from '../style/style';

export default function Planet({navigation}) {

    // const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState([]);
    const [planet, setPlanet] = useState([]);
  
    useEffect(() => {
      fetch('https://api.le-systeme-solaire.net/rest/bodies?data=id,isPlanet,name,englishName,moons')
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
          <Pressable>
          {planet.name + ', ' + planet.englishName}
          </Pressable>
        ))}
      </View>
      
    )
  };