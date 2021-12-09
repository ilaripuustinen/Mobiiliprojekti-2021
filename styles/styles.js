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
  hsbackground: {
    justifyContent:"center"
  },
  hstext: {
    fontFamily: 'RussoOne',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
    marginTop: 20,
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
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
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