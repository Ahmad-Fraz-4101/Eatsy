import { View, Text,Image,  FlatList, RefreshControl,StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import SearchInput from '../components/SearchInput';
import DisplayWindow from '../components/DisplayWindow';
import { Link, useRouter } from 'expo-router'; 



const Home = () => {

  const router = useRouter(); 
  
  return (
    <SafeAreaView style={{height:'100%'}}>
      <ImageBackground
      source={images.homeBg}
      style={{flex:1}}
      resizeMode='cover'
      >
       <View>
            <View style={{ marginBottom:20,flexDirection:'row', justifyContent:'space-between'}}  >
              <Image
              source={images.logoSmall}
              style={{width:140,height:60,marginRight:10}}
              resizeMode="cover"
              />
              <Text style={{ color:'#482121', marginRight:10 ,fontSize:20, fontWeight:800,fontStyle:'italic', marginTop:10 } }>
                Welcome to {'\n'}     Eatsy!
              </Text>
            </View>

            <View style={{}}>
            <SearchInput
            />
            </View>
            
            <DisplayWindow
            posts={[{id:1, image:images.ad1},{id:2, image:images.ad1},{id:3, image:images.ad1}]??[]}
            />

         <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:50}}>


         <TouchableOpacity
           onPress={()=>router.push('/burgers')}
           >
          <Image
          source={images.fastCard}
          style={styles.image}
          />
         </TouchableOpacity>
         

         <TouchableOpacity
         onPress={()=>router.push('/pasta')}
         >
          <Image
          source={images.ContCard}
          style={styles.image}
          />
           </TouchableOpacity>


           
         </View>
         </View>
        </ImageBackground>
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
 
  image: {
    width: 150, 
    height: 150,
    resizeMode: 'cover', 
    borderRadius:50
  },
 
});
export default Home