import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  textInput: {
    height: Dimensions.get('window').height / 20,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'grey',
  },
});
