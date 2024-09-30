import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from './components/CustomButton';
import { useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const router = useRouter(); 

  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#482121' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
          <Image
            source={images.logo}
            style={{ width: 350, height: 140,marginTop:40 }}
            resizeMode="contain"
          />

          
          <Image
            source={images.cards}
            style={{ maxWidth: 300, width: '100%', height: 300 }}
            resizeMode="contain"
          />
              
          <View style={{ position: 'relative', marginTop: 20 }}>
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
              Where FAST Meet Flavours!
              <Text style={{ color: '#F3DEBA' }}>{'             '}Presenting You Eatsy.</Text>
            </Text>

            <Image
              source={images.path}
              style={{ width: 136, height: 15, position: 'absolute', bottom: -8, right:5 }}
              resizeMode="contain"
            />
          </View>
          <Text style={{ fontSize: 14, color: '#B0B0B0', marginTop: 14, textAlign: 'center' }}>
            2x more price for Fast's Faculty and Administration 
          </Text>

          <CustomButton
            title="Continue With Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles={{ marginTop: 20 }} 
          />
         
         <TouchableOpacity
         onPress={fetchData}
         >
  <Text>HELLO</Text>
         </TouchableOpacity>

          
        </View>  
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
