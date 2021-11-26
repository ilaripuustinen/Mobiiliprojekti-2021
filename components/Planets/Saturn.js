import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
//import styles from '.../style/style';

export default function Saturn() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);
  
    useEffect(() => {
      fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=id,eq,saturne')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
  
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Text>Loading...</Text> : 
        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
            <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>{data.englishName}</Text>
            <Image></Image>
            <FlatList
              data={data.bodies}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.id + ', ' + item.englishName + ', ' + item.meanRadius}</Text>
              )}
            />
          </View>
        )}
      </View>
    );
  };