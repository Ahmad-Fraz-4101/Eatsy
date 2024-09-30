import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import {images} from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemCard from '../components/itemCards'; 

const pizzas = [
  {
    id: '1',
    name: 'Tex-Mex',
    description: 'Tex-Mex chicken, onions, green peppers...',
    image:images.p1, 
    price: 420,
    originalPrice: 599,
  },
  {
    id: '2',
    name: 'Margherita',
    description: 'Tomato, mozzarella cheese , and fresh ba...',
    image: images.p2, // Replace with your pizza image URL
    price: 350,
    originalPrice: 499,
  },
  {
    id: '3',
    name: 'BBQ Chicken',
    description: 'BBQ chicken, onions, peppers, and ...',
    image: images.p3, // Replace with your pizza image URL
    price: 500,
    originalPrice: 699,
  },
  {
    id: '4',
    name: 'Peri Peri',
    description: 'Peri Peri chicken, onions, Tomatoes, and ...',
    image: images.p4, // Replace with your pizza image URL
    price: 500,
    originalPrice: 699,
  },
  // Add more pizzas here
];

const PizzaListScreen = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
    alert(`${pizza.name} added to cart!`);
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
        data={pizzas}
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

export default PizzaListScreen;
