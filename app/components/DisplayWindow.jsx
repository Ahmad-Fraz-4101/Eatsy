import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()} 
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={styles.flatListContentContainer}  
      
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    marginTop:10,
    paddingVertical: 0,
    height: 150, 
  },
  itemContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 300, 
    height: 150,
    resizeMode: 'cover', 
  },
  
 
});

export default Trending;
