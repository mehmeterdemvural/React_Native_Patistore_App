import React from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './Search.styles';

function Search() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        cursorColor={'red'}
        placeholder="Find..."
        placeholderTextColor={'grey'}
      />
    </View>
  );
}

export default Search;
