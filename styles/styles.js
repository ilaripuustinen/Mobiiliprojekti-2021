import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
/*       paddingTop: '200px', */
      fontSize: 30,
    },
    text: {
      fontFamily: 'RussoOne',
      fontSize: 30,
      color: '#F1F1E6',
      backgroundColor: '#220C17',
      // #16131D
      padding: 5,
      marginTop: 10,
      marginBottom: 10,
      borderBottomEndRadius: 20,
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 20,
      borderTopStartRadius: 20,
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
      opacity: 0.9,
    },

    frontpageLogo: {
      flex: 1,
      height: 100,
      marginBottom: 80
    }
});