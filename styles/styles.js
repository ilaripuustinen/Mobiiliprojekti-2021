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
  },
  frontpageLogo: {
    height: 100,
    width: "auto",
    marginBottom: 30,
    marginTop: 80
  },
  frontpageButton: {
    height: 130,
    width: 280,
    alignContent: 'center',
    justifyContent: 'center',
  },
  frontpageContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  frontpagePressable: {
    flex: 1,
    fontFamily: 'RussoOne',
    fontSize: 30,
    color: '#DD2A2A',
    padding: 5,
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
  },

});