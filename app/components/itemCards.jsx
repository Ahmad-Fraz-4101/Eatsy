
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ItemCard = ({ item, addToCart }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemCard}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.discountedPrice}>Rs. {item.price}</Text>
          <Text style={styles.originalPrice}>Rs. {item.originalPrice}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToCart(item)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#482121',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3deba',
  },
  itemDescription: {
    fontSize: 14,
    color: '#B0B0B0',
    marginVertical: 5,
  },
  discountedPrice: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#999',
  },
  addToCartButton: {
    backgroundColor: '#f3deba',
    paddingVertical: 8,
    paddingHorizontal: 35,
    borderRadius: 5,
    marginTop: 10,
    width: 150,
  },
  addToCartText: {
    color: '#482121',
    fontWeight: 'bold',
  },
});

export default ItemCard;
