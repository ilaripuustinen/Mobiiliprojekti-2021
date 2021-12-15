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
    <ImageBackground source={require("../../assets/Images/UranusBackground.png")} resizeMode="cover" style={styles.background}>
      <View style={styles.planetContainer}>

        <Text style={styles.planetUranusTitle}>Uranus</Text>
        <Text style={styles.planetUranusSecondTitle}>The sideways planet</Text>
        <Image source={require("../../assets/Images/planets/Uranus.png")}
          style={{ height: 240, width: 400, marginBottom: 30 }} />


        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
   
              <View style={{ width: 120, textAlign: 'right', marginLeft:30 }}>
                <Text style={styles.planetUranusText}>Mass {"\n"}
                  {planet.map(planet => (
                    <Text style={styles.planetData}>{(planet.mass.massValue).toFixed(2)} 10nkg</Text>
                  ))}</Text>
              </View>


          

            <View style={{ width: 220, textAlign: 'left', height: 80 }}>
              <Text style={styles.planetUranusText}>Semimajor Axis {"\n"}
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
              <Text style={styles.planetUranusText}>Gravity {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{(planet.gravity)} m.s-2</Text>
                ))}
              </Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 220, textAlign: 'right' }}>
              <Text style={styles.planetUranusText}>Mean Radius {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{planet.meanRadius} Km</Text>
                ))}</Text>
            </View>


          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 120, textAlign: 'left', height: 80, marginLeft:30 }}>
              <Text style={styles.planetUranusText}>Obliquity {"\n"}
                {planet.map(planet => (
                  <Text style={styles.planetData}>{planet.axialTilt} °</Text>
                ))}
              </Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 220, textAlign: 'right' }}>
              <Text style={styles.planetUranusText}>Number Of Moons {"\n"}
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
