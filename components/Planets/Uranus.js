import React, { useEffect, useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from '../../styles/styles';

export default function Uranus() {


  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=id,eq,uranus')
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
    <ImageBackground source={require("../../assets/Images/PlanetBackground.png")} resizeMode="cover" style={styles.background}>
      <View style={styles.planetContainer}>

        <Text style={styles.planetTitle}>Uranus</Text>
        <Image source={require("../../assets/Images/planets/Uranus.png")}
          style={{ height: 250, width: 250, marginBottom: 30 }} />

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 107, textAlign: 'right' }}>
              <Text style={styles.planetText}>Axis:</Text>
            </View>
            {planet.map(planet => (
              <Text style={styles.planetInfo}>{(planet.semimajorAxis / 1000000).toFixed(1)} Gm</Text>
            ))}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 107, textAlign: 'right' }}>
              <Text style={styles.planetText}>Radius:</Text>
            </View>
            {planet.map(planet => (
              <Text style={styles.planetInfo}>{planet.meanRadius} Km</Text>
            ))}
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 107, textAlign: 'right' }}>
              <Text style={styles.planetText}>Gravity:</Text>
            </View>
            {planet.map(planet => (
              <Text style={styles.planetInfo}>{(planet.gravity)} m.s-2</Text>
            ))}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 90, textAlign: 'right' }}>
              <Text style={styles.planetText}>Mass:</Text>
            </View>
            {planet.map(planet => (
              <Text style={styles.planetInfo}>{(planet.mass.massValue).toFixed(2)} 10nkg</Text>
            ))}
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 120, textAlign: 'right' }}>
              <Text style={styles.planetText}>Obliquity:</Text>
            </View>
            {planet.map(planet => (
              <Text style={styles.planetInfo}>{planet.axialTilt} °</Text>
            ))}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 100, textAlign: 'right', marginLeft: 24 }}>
              <Text style={styles.planetText}>Moons: </Text>
            </View>
            {planet.map(planet => (
              <Text style={styles.planetInfo}>{planet.moons.length} kpl</Text>
            ))}
          </View>
        </View>


      </View>
    </ImageBackground>
  )
};
