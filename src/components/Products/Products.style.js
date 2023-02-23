import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 2.7,
    width: Dimensions.get('window').width / 2,
    margin: 10,
    borderRadius: 10,
    flex: 1,
    backgroundColor: '#eceff1',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 210,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    width: '100%',
    height: 40,
    textAlign: 'left',
    paddingLeft: 10,
    paddingRight: 10,
  },
  price: {
    color: 'grey',
    paddingLeft: 10,
    marginBottom: 5,
    width: '100%',
  },
  stock: {
    color: 'red',
    paddingLeft: 10,
    width: '100%',
  },
});
