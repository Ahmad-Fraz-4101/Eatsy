import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton';
import { auth } from '../../firebase';
import { useRouter } from 'expo-router'; 

const profile = () => {


  const router = useRouter(); 

const handlesignout=()=>{
auth.signOut()
.then(()=>{
  router.replace('/sign-in')
})
.catch(error =>alert(error.message))
}

  return (
    <SafeAreaView style={{
      backgroundColor:'#161622',
      height:'100%'
    }}>
    <View>
      <CustomButton
      title="Logout"
      handlePress={handlesignout}
      />
    </View>
    </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({})