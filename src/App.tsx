import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';

import Search from './components/Search';
import Products from './components/Products';
import data from './data/data.json';

function App(): JSX.Element {
  const renderProducts = ({item}) => <Products product={item} />;
  const keyExtract = (item, index) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Search/>
      <FlatList
      style={styles.flat}
        data={data}
        renderItem={renderProducts}
        keyExtractor={keyExtract}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'space-around',
  },
  flat: {
    flex: 1,
    alignContent: 'space-around',
  },
});
export default App;
