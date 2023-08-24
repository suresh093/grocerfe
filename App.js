
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// Define your Django backend API URL
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
const API_BASE_URL = 'http://192.168.1.100:8000/apis/v1/';

// // Fetch the list of products
// axios.get(`${API_BASE_URL}products/`)
//   .then(response => {
//     const products = response.data;
//     console.log(products);
//   })
//   .catch(error => {
//     console.error(error);
//   });



const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the provided JSON using Axios
    axios.get('http://192.168.0.102:8080/products/download.jpg')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Price: ${item.price}</Text>
      <Text style={styles.productDiscountPrice}>Discount: ${item.discount_price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
  },
  productDiscountPrice: {
    fontSize: 14,
    color: 'green',
  },
});

export default App;
