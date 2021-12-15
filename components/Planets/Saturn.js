import React, { useEffect, useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from '../../styles/styles';

export default function Saturn() {


  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=id,eq,saturne')
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
    <ImageBackground source={require("../../assets/Images/SaturnBackground.png")} resizeMode="cover" style={styles.background}>
      <View style={styles.planetContainer}>

        <Text style={styles.planetSaturnTitle}>Saturn</Text>
        <Text style={styles.planetSaturnSecondTitle}>The Elegant Planet</Text>
        <Image source={require("../../assets/Images/planets/Saturn.png")}
          style={{ height: 150, width: 400, marginBottom: 60, marginTop: 30 }} />


        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
   
              <View style={{ width: 120, textAlign: 'right', marginLeft:30 }}>
                <Text style={styles.planetSaturnText}>Mass {"\n"}
                  {planet.map(planet => (
                    <Text style={styles.planetData}>{(planet.mass.massValue).toFixed(2)} 10nkg</Text>
                  ))}</Text>
              </View>


          

            <View style={{ width: 220, textAlign: 'left', height: 80 }}>
              <Text style={styles.planetSaturnText}>Semimajor Axis {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{(planet.semimajorAxis / 1000000).toFixed(1)} Gm</Text>
                ))}
              </Text>
            </View>

          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 120, textAlign: 'left', height: 80, marginLeft:30 }}>
              <Text style={styles.planetSaturnText}>Gravity {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{(planet.gravity)} m.s-2</Text>
                ))}
              </Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 220, textAlign: 'right' }}>
              <Text style={styles.planetSaturnText}>Mean Radius {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{planet.meanRadius} Km</Text>
                ))}</Text>
            </View>


          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 120, textAlign: 'left', height: 80, marginLeft:30 }}>
              <Text style={styles.planetSaturnText}>Obliquity {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{planet.axialTilt} °</Text>
                ))}
              </Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 220, textAlign: 'right' }}>
              <Text style={styles.planetSaturnText}>Number Of Moons {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{planet.moons.length} kpl</Text>
                ))}</Text>
            </View>

          </View>
        </View>

      </View>
    </ImageBackground>
  )
};
