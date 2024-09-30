import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import {images} from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemCard from '../components/itemCards'; 

const burgers = [
  {
    id: '1',
    name: 'Pizza & Burger Feast',
    description: '1 Large peri Peri Pizza + 2 Honey Mustard Clucker + 2 Soft Drinks Perfect for sharing!',
    image:images.d2, 
    price: 420,
    originalPrice: 599,
  },
  {
    id: '2',
    name: 'Double Delight Combo',
    description: '1 Medium Margherita Pizza + 1 Smoky BBQ Boss Burger + Fries + 2 Soft Drinks. A balanced meal for two',
    image: images.d1, 
    price: 350,
    originalPrice: 499,
  },
  {
    id: '3',
    name: 'Family Pizza & Burger Pack',
    description: '2 any Large Pizzas + 2 any Beef Burgers + 2 any Chicken Burgers + 4 Soft Drinks Great for families and groups!',
    image: images.d3, 
    price: 500,
    originalPrice: 699,
  },
  {
    id: '4',
    name: 'Burger Meal',
    description: 'Any burger served with Fries and Soft Drink',
    image: images.d5, 
    price: 500,
    originalPrice: 699,
  },
  {
    id: '5',
    name: 'Pizza Meal',
    description: 'Any small  Pizza (flavour of your choice) and a Soft Drink',
    image: images.d4, 
    price: 500,
    originalPrice: 699,
  },
  // Add more burgers here
];

const DealsListScreen = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (burger) => {
    setCart([...cart, burger]);
    alert(`${burger.name} added to cart!`);
  };


  return (
    <>
    <View style={{ height:150,justifyContent:'center',backgroundColor:'#482121',alignItems:'center'}}>
        <Image
        source={images.logo}
        style={{width:300,height:200,marginTop:20}}
        resizeMode='contain'
        />
      </View>

    <View style={styles.container}>
    <FlatList
          data={burgers}
          renderItem={({ item }) => (
            <ItemCard item={item} addToCart={addToCart} />  
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3deba',
    padding: 16,
  },
  
});

export default DealsListScreen;
