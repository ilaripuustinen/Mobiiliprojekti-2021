/*
import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";

const URL = "https://api.le-systeme-solaire.net/rest/bodies?data=id,isplanetorder=isplanet"


export default function FetchApi() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then ((json) =>{
            console.log(json);
            const planet = json.contents.id;
            setTitle(planet.title);
            setText(planet.text);
            
        })
    })

    return(
        <View>
            <Text>
                {title}
            </Text>
        </View>
    );
};
*/
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function FetchApi () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies?data=id,isplanetoder=isplanet')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data.bodies}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />
        </View>
      )}
    </View>
  );
};