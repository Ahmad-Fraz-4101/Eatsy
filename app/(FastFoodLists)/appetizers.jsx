import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import {images} from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemCard from '../components/itemCards'; 

const burgers = [
  {
    id: '1',
    name: 'Sizzling Buffalo Wings',
    description: 'Juicy, spicy chicken wings coated ...',
    image:images.wings, 
    price: 420,
    originalPrice: 599,
  },
  {
    id: '2',
    name: 'Mozzarella Sticks',
    description: 'Crispy, breaded cheese sticks ...',
    image: images.sticks, 
    price: 350,
    originalPrice: 499,
  },
  {
    id: '3',
    name: 'Onion Rings',
    description: 'Deep-fried, crispy battered ...',
    image: images.onion, 
    price: 500,
    originalPrice: 699,
  },
  {
    id: '4',
    name: 'Super Loaded Fries',
    description: 'A flame-grilled beef burger slathered ...',
    image: images.fries, 
    price: 500,
    originalPrice: 699,
  },
  // Add more burgers here
];

const AppetizerListScreen = () => {
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

export default AppetizerListScreen;
