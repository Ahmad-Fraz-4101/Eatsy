import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import FormField from "../components/FormField"; 
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";
import { images } from "../../constants";
import {  useRouter } from 'expo-router'; 
import { auth } from '../../firebase'; // Ensure this import is correct
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const [error, setError] = useState('');
  const router = useRouter(); // For navigation

  const submit = () => {
    setIsSubmitting(true);

    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        setIsSubmitting(false);
      })
      .catch((error) => {
        alert(error.message);
        setIsSubmitting(false);
      });
  };

  // const submit = async () => {
  //   console.log("sending api req");
  //   setIsSubmitting(true);
  //   setError('');
  //    const Name="ahmad";
  //   try {
  //     // Sending email and password to the backend API endpoint
  //     const response = await axios.post('http://localhost:5205/api/signup', {
  //       Name,
  //       Email,
  //       Password
  //     });

  //     // Handle the success response (e.g., user is registered)
  //     console.log('User registered:', response.data);

  //     // Navigate to another screen if needed (e.g., sign-in or main screen)
  //     router.push('/index');
      
  //   } catch (error) {
  //     // Handle errors (e.g., API error)
  //     if (error.response) {
  //       // Backend response error (e.g., validation failure)
  //       setError(error.response.data.message);
  //     } else {
  //       // Network or other errors
  //       setError('Something went wrong, please try again.');
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };


  return (
    <SafeAreaView style={{height:'100%',backgroundColor:'#482121'}}>
      <KeyboardAvoidingView>
        <View style={{
  width: '100%',
  justifyContent: 'center',
  minHeight: '85%', 
  paddingHorizontal: 16,
  marginVertical: 24, 
}}>
  <View style={{flex:1,justifyContent:'center' ,alignItems:'center'}}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{
              width: 205, // w-[115px]
              height: 200,  // h-[35px]
              
            }}


          />

</View>
          <Text  style={{
    fontSize: 24, 
    color: 'white', 
    fontWeight: '600', 
    marginTop: 10, 
    fontFamily: 'Poppins-SemiBold' 
  }}>
           {' '}Join Eatsy, Meet Flavours
          </Text>
          
          <Text style={{
    fontSize: 24, 
    color: '#F3DEBA', 
    fontWeight: '600', 
    marginTop: 10, 
    fontFamily: 'Poppins-SemiBold', 
    textAlign:'center'
  }}>Sign Up Now!</Text>

          <FormField
            title="Email"
            value={Email}
            handleChangeText={(e) => setEmail(e)}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={Password}
            handleChangeText={(e) => setPassword(e)}
            otherStyles="mt-7"
          />

          
            
          <CustomButton
          title="Sign Up"
          handlePress={submit}
          />

          <View style={{ 
  justifyContent: 'center', // justify-center
  paddingTop: 20, // pt-5 (5 units in Tailwind, often 20px)
  flexDirection: 'row', // flex-row
  gap: 8 // gap-2 (adjust based on actual pixel value, 2 units often translates to 8px)
}}>
            <Text style={{
    fontSize: 18, // text-lg (typically translates to 18px)
    color: '#D3D3D3', // text-gray-100 (adjust color code as needed)
    fontFamily: 'Poppins-Regular' // font-pregular (replace with actual font family if different)
  }}>
              Already Have an Account?
            </Text>
            <Link
              href="/sign-in"
              style={{
                fontSize: 18, // text-lg (typically translates to 18px)
                fontFamily: 'Poppins-SemiBold', // font-psemibold (replace with actual font family if different)
                color: '#F3DEBA' // text-secondary-100 (replace with actual color code)
              }}
            >
              Sign In
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
