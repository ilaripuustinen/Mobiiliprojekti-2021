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
    justifyContent: "center"
  },

  hstext: {
    fontFamily: 'RussoOne',
    fontSize: 20,
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
    marginTop: 25,
    marginRight: 15,
    marginLeft: 15,
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
    width: 115,
    height: 115,
    maxHeight: 125,
    maxWidth: 125,
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
    alignContent: 'center',
    alignItems: 'center',
  },

  

  planetSecondTitle: {
    fontFamily: 'RussoOne',
    fontSize: 25,
    color: '#4A71AA',
    marginBottom: 40,
    alignContent: 'center',
    alignItems: 'center',
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