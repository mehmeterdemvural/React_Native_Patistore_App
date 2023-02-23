import React from 'react';
import {View, Image, Text} from 'react-native';

import {styles} from './Products.style';

function Products({product}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.stock}>{product.inStock === false ? "OUT OF STOCK" : "In Stock"} </Text>
      
    </View>
  );
}

export default Products;
