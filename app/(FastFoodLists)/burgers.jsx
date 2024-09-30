import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import {images} from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemCard from '../components/itemCards'; 

const burgers = [
  {
    id: '1',
    name: 'Tangy Teriyaki Twist',
    description: 'Grilled chicken glazed in teriyaki ...',
    image:images.b1, 
    price: 420,
    originalPrice: 599,
  },
  {
    id: '2',
    name: 'Honey Mustard Clucker',
    description: 'Crispy chicken smothered in a sweet and ...',
    image: images.b2, 
    price: 350,
    originalPrice: 499,
  },
  {
    id: '3',
    name: 'Beefy Bliss',
    description: 'A juicy beef patty loaded with melted cheese and ...',
    image: images.b3, 
    price: 500,
    originalPrice: 699,
  },
  {
    id: '4',
    name: 'Smoky BBQ Boss',
    description: 'A flame-grilled beef burger slathered in rich, ...',
    image: images.b4, 
    price: 500,
    originalPrice: 699,
  },
  // Add more burgers here
];

const BurgersListScreen = () => {
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

export default BurgersListScreen;
