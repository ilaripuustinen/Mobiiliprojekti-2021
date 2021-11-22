import React, {useState} from 'react';
import { View, Text } from 'react-native';

export default function SinglePlanet({route}) {
    const [name, setName] = useState('');
    const [moons, setMoons] = useState([]);

    useEffect(() => {
        if (route.params?.planet) {
            setName(route.params.planet.englishName);
            setMoons(route.params.planet.moons);
        }
    }, [route.params?.planet])

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}
