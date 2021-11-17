import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import styles from '../style/style';

export default function Planet() {

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
            if (element.isPlanet) {
              console.log(element.name);
              temp.push(element)
            }
          });
          setPlanet(temp);
        })
        
    }, []);

/*     function singlePlanet() {
      for (let i = 0; i < data; i++)
        if (data.isPlanet === true) {
          setPlanet();
        } else {
          setNotPlanet();
        }
    } */

    return (

      <View style={styles.container}>
        <Text>Planets</Text>
        {planet.map(planet => (
          <Text>{planet.name}</Text>
        ))}
      </View>)
   
      // <View style={styles.container}>
      // {isLoading ? <Text>Loading...</Text> : 
      // ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
      //   <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Planets:</Text>
      //    <FlatList
    //         data={data.bodies}
    //         keyExtractor={({ id }, index) => id}
    //         renderItem={({ item }) => (
    //           <Text>{item.name + '. ' + item.englishName}</Text>
    //         )}
    //       />
    //     </View>
    //   )}
    // </View> }
    // );
  };