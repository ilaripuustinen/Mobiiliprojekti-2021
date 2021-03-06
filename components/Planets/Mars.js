import React, { useEffect, useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from '../../styles/styles';

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
    <ImageBackground source={require("../../assets/Images/MarsBackground.png")} resizeMode="cover" style={styles.background}>
      <View style={styles.planetContainer}>

        <Text style={styles.planetMarsTitle}>Mars</Text>
        <Text style={styles.planetMarsSecondTitle}>The red planet</Text>
        <Image source={require("../../assets/Images/planets/Mars.png")}
          style={{ height: 300, width: 300, marginBottom: 10 }} />


        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 120, textAlign: 'right', marginLeft: 30 }}>
              <Text style={styles.planetMarsText}>Mass {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{(planet.mass.massValue).toFixed(2)} 10nkg</Text>
                ))}</Text>
            </View>




            <View style={{ width: 220, textAlign: 'left', height: 80 }}>
              <Text style={styles.planetMarsText}>Semimajor Axis {"\n"}
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
              <Text style={styles.planetMarsText}>Gravity {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{(planet.gravity)} m.s-2</Text>
                ))}
              </Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 220, textAlign: 'right' }}>
              <Text style={styles.planetMarsText}>Mean Radius {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{planet.meanRadius} Km</Text>
                ))}</Text>
            </View>


          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 120, textAlign: 'left', height: 80, marginLeft: 30 }}>
              <Text style={styles.planetMarsText}>Obliquity {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{planet.axialTilt} ??</Text>
                ))}
              </Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 220, textAlign: 'right' }}>
              <Text style={styles.planetMarsText}>Number Of Moons {"\n"}
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
