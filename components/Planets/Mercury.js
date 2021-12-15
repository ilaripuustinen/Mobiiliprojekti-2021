import React, { useEffect, useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from '../../styles/styles';

export default function Mercury() {

  const [planet, setPlanet] = useState([]);
  const [moons, setMoons] = useState('');

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=id,eq,mercure')
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
    <ImageBackground source={require("../../assets/Images/MercuryBackground.png")} resizeMode="cover" style={styles.background}>
      <View style={styles.planetContainer}>

        <Text style={styles.planetMercuryTitle}>Mercury</Text>
        <Text style={styles.planetMercurySecondTitle}>The Innermost Planet</Text>
        <Image source={require("../../assets/Images/planets/Mercury.png")}
          style={{ height: 250, width: 250, marginBottom: 30 }} />


        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 120, textAlign: 'right', marginLeft: 30 }}>
              <Text style={styles.planetMercuryText}>Mass {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{(planet.mass.massValue).toFixed(2)} 10nkg</Text>
                ))}</Text>
            </View>




            <View style={{ width: 220, textAlign: 'left', height: 80 }}>
              <Text style={styles.planetMercuryText}>Semimajor Axis {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{(planet.semimajorAxis / 1000000).toFixed(1)} Gm</Text>
                ))}
              </Text>
            </View>

          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 120, textAlign: 'left', height: 80, marginLeft: 30 }}>
              <Text style={styles.planetMercuryText}>Gravity {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{(planet.gravity)} m.s-2</Text>
                ))}
              </Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 220, textAlign: 'right' }}>
              <Text style={styles.planetMercuryText}>Mean Radius {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{planet.meanRadius} Km</Text>
                ))}</Text>
            </View>
          </View>
        </View>



        <View style={{ width: 120, textAlign: 'left', height: 80, marginLeft: 30 }}>
          <Text style={styles.planetMercuryText}>Obliquity {"\n"}
            {planet.map(planet => (
              <Text style={styles.planetData}>{planet.axialTilt} °</Text>
            ))}
          </Text>
        </View>

      </View>
    </ImageBackground>
  )
};
