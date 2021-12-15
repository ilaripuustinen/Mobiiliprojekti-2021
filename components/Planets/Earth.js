import React, { useEffect, useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from '../../styles/styles';

export default function Earth() {

 
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=id,eq,terre')
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
    <ImageBackground source={require("../../assets/Images/EarthBackground.png")} resizeMode="cover" style={styles.background}>
      <View style={styles.planetContainer}>

        <Text style={styles.planetTitle}>Earth</Text>
        <Text style={styles.planetSecondTitle}>the Blue Planet</Text>
        <Image source={require("../../assets/Images/planets/Earth.png")}
          style={{ height: 250, width: 250, marginBottom: 30 }} />


        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
   
              <View style={{ width: 120, textAlign: 'right', marginLeft:30 }}>
                <Text style={styles.planetText}>Mass {"\n"}
                  {planet.map(planet => (
                    <Text style={styles.planetData}>{(planet.mass.massValue).toFixed(2)} 10nkg</Text>
                  ))}</Text>
              </View>


          

            <View style={{ width: 220, textAlign: 'left', height: 80 }}>
              <Text style={styles.planetText}>Semimajor Axis {"\n"}
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
              <Text style={styles.planetText}>Gravity {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{(planet.gravity)} m.s-2</Text>
                ))}
              </Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 220, textAlign: 'right' }}>
              <Text style={styles.planetText}>Mean Radius {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{planet.meanRadius} Km</Text>
                ))}</Text>
            </View>


          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 120, textAlign: 'left', height: 80, marginLeft:30 }}>
              <Text style={styles.planetText}>Obliquity {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{planet.axialTilt} °</Text>
                ))}
              </Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 220, textAlign: 'right' }}>
              <Text style={styles.planetText}>Number Of Moons {"\n"}
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
