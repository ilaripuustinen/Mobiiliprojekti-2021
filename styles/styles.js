import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      textAlign: 'center',
      paddingTop: '200px',
      fontSize: 30,
    },
    text: {
      fontFamily: 'Merriweather',
      fontSize: 30,
      color: '#DA4E30',
      backgroundColor: '#373432',
      padding: 10,
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
      borderTopRightRadius: 10,
      borderTopStartRadius: 10,
      alignContent: 'center',
    },
    background: {
        flex: 1,
        // blurRadius: 10,
        justifyContent: "center"
    },
    hstext: {
      fontFamily: 'Merriweather',
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
    }
});