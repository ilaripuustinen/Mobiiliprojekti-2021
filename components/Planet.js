import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import styles from '../style/style';

export default function Planet() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);
  
    useEffect(() => {
      fetch('https://api.le-systeme-solaire.net/rest/bodies?data=id,isPlanet,name,englishName')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
  
      <View style={styles.container}>
        {isLoading ? <Text>Loading...</Text> : 
        ( <View style={styles.container}>
            <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Planets:</Text>
            <FlatList
              data={data.bodies}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <Text>{item.id + ', ' + item.name + ', ' + item.englishName}</Text>
              )}
            />
          </View>
        )}
      </View>
    );
}