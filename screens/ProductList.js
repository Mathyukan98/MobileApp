import React, { useEffect,useState } from 'react';
import { View, FlatList,Text,Button,StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './actions';
import ProductCard from './ProductCard';
import COLORS from '../constants/colors';


const ProductList = ({ navigation }) => {
    
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
 

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  

  const navigateToProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  

  return (
    

    <View>
      <Text style={styles.text}>Hi Welcome </Text>
        <View style={styles.buttonContainer}>
        <Button
        title="Sort Ascending"
        onPress={() => navigation.navigate('ProductSort', { sortOrder: 'asc' })}
        style={styles.button}
      />
      <Button
        title="Sort Descending"
        onPress={() => navigation.navigate('ProductSort', { sortOrder: 'desc' })}
        style={styles.button}
      />
        </View>
        
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          
          <ProductCard product={item} onPress={() => navigateToProductDetail(item)}  />
        )}
      />
      

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%', // Adjust the width as needed
  },
  button: {
    width: '40%', // Adjust the width as needed
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: COLORS.black
  }
});

export default ProductList;
