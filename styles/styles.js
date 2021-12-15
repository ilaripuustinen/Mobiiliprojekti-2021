import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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

  hsbackground: {
    flex: 1,
    justifyContent: "center"
  },

  hstext: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
    marginRight: 15,
    marginLeft: 15,
  },
  hsTitle: {
    fontFamily: 'RussoOne',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
    marginTop: 44,
    marginRight: 15,
    marginLeft: 15,
  },

  horoTitle: {
    fontFamily: 'RussoOne',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 20
  },

  hsstyle: {
    // flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  hsImage: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    width: 110,
    height: 110,
    // maxHeight: 125,
    // maxWidth: 125,
    // minWidth: 100,
    // minHeight: 100,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,

  },
  loadingLogo: {
    width: 300,
    height: 300,
    // justifyContent: 'center',
    alignSelf: 'center',
  },

  thumbnail: {
    width: 410,
    height: 250,
    // borderColor: 'white',
    // borderWidth: 1,
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
    paddingBottom: 120,
    flex: 1,
    fontFamily: 'RussoOne',
    fontSize: 30,
    color: '#DD2A2A',
    marginTop: 20,
    alignItems: 'center',
  },

  newsContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 80,
    margin: 20,
  },

  newsHeadline: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'RussoOne',
    color: '#F6F7FF',
    padding: 20,

  },

  newsSite: {
    paddingBottom: 20,
    paddingTop: 5,
    color: '#BEBEBE',
    fontFamily: 'RussoOne',
    fontSize: 15,
    // justifyContent: 'left',
  },

  planetTitle: {
    fontFamily: 'RussoOne',
    fontSize: 40,
    color: '#C5DDFF',
    marginTop: 10,
  },
  planetSecondTitle: {
    fontFamily: 'RussoOne',
    fontSize: 25,
    color: '#4A71AA',
    marginBottom: 40,
  },
  planetText: {
    fontFamily: 'RussoOne',
    fontSize: 20,
    color: '#4A71AA',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    textAlign: 'left',
  },

  planetUranusTitle: {
    fontFamily: 'RussoOne',
    fontSize: 40,
    color: '#83F0E4',
    marginTop: 10,
  },
  planetUranusSecondTitle: {
    fontFamily: 'RussoOne',
    fontSize: 25,
    color: '#38B1A4',
    marginBottom: 40,
  },
  planetUranusText: {
    fontFamily: 'RussoOne',
    fontSize: 20,
    color: '#38B1A4',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    textAlign: 'left',
  },
  
  planetSaturnTitle: {
    fontFamily: 'RussoOne',
    fontSize: 40,
    color: '#D4DDAC',
    marginTop: 10,
  },
  planetSaturnSecondTitle: {
    fontFamily: 'RussoOne',
    fontSize: 25,
    color: '#949A76',
    marginBottom: 40,
  },
  planetSaturnText: {
    fontFamily: 'RussoOne',
    fontSize: 20,
    color: '#949A76',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    textAlign: 'left',
  },

  planetJupiterTitle: {
    fontFamily: 'RussoOne',
    fontSize: 40,
    color: '#F0CC8C',
    marginTop: 10,
  },
  planetJupiterSecondTitle: {
    fontFamily: 'RussoOne',
    fontSize: 25,
    color: '#8F6F35',
    marginBottom: 40,
  },
  planetJupiterText: {
    fontFamily: 'RussoOne',
    fontSize: 20,
    color: '#8F6F35',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    textAlign: 'left',
  },

  planetMarsTitle: {
    fontFamily: 'RussoOne',
    fontSize: 40,
    color: '#EDB6AC',
    marginTop: 10,
  },
  planetMarsSecondTitle: {
    fontFamily: 'RussoOne',
    fontSize: 25,
    color: '#964536',
    marginBottom: 40,
  },
  planetMarsText: {
    fontFamily: 'RussoOne',
    fontSize: 20,
    color: '#964536',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    textAlign: 'left',
  },

  planetVenusTitle: {
    fontFamily: 'RussoOne',
    fontSize: 40,
    color: '#FFE8C4',
    marginTop: 10,
  },
  planetVenusSecondTitle: {
    fontFamily: 'RussoOne',
    fontSize: 25,
    color: '#8C5913',
    marginBottom: 40,
  },
  planetVenusText: {
    fontFamily: 'RussoOne',
    fontSize: 20,
    color: '#8C5913',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    textAlign: 'left',
  },

  planetMercuryTitle: {
    fontFamily: 'RussoOne',
    fontSize: 40,
    color: '#E6E2DC',
    marginTop: 10,
  },
  planetMercurySecondTitle: {
    fontFamily: 'RussoOne',
    fontSize: 25,
    color: '#716B63',
    marginBottom: 40,
  },
  planetMercuryText: {
    fontFamily: 'RussoOne',
    fontSize: 20,
    color: '#716B63',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    textAlign: 'left',
  },

  planetData: {
    width: 90,
    fontSize: 15,
    color: '#BABABA',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'left'
  },
  planetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});