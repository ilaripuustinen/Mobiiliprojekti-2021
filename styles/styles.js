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
      color: '#DD2A2A',
     /*  backgroundColor: '#16131D', */
      padding: 5,
      marginTop: 10,
      marginBottom: 10,
      borderBottomEndRadius: 20,
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 20,
      borderTopStartRadius: 20,
      alignContent: 'center',
      alignItems: 'center',
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
      marginBottom: 40,
      marginTop: 60
    },
    frontpageButton: {
      flex: 1,
      height: 110,
      width: 260,
      alignContent: 'center',
    },
    thumbnail: {
      width: 250,
      height: 250,
    },
    imageWrapper: {
      alignItems: 'center',
    },
    newsImage: {
      width: 350,
      height: 350,
      marginBottom: 10,
    }
});