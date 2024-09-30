import { View, Text, ScrollView, Image, Dimensions, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router'; 
import { auth } from '../../firebase';
import { images } from '../../constants';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


const { height: screenHeight } = Dimensions.get('window');
const viewHeight = screenHeight * 0.85;

const SignIn = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter(); // Using Expo Router

  const submit = () => {
    setIsSubmitting(true);
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Logged in with:', user.email);
        setIsSubmitting(false);
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/home'); // Navigate to home page if user is logged in
      }
    });
    return unsubscribe;
  }, [router]);

  return (
    <SafeAreaView style={{height:'100%', backgroundColor:'#482121'}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 16 }}>
        <View style={{ alignItems: 'center', minHeight: viewHeight }}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 250, height: 150 }}
          />
          <Text style={{ fontSize: 24, color: 'white', fontWeight: '600', marginTop: 10 }}>
            Login To Eatsy!
          </Text>

          <FormField
            title="Email"
            value={Email}
            handleChangeText={(text) => setEmail(text)}
            otherStyles={{ marginTop: 7 }}
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={Password}
            handleChangeText={(text) => setPassword(text)}
            otherStyles={{ marginTop: 7 }}
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 5 }}>
            <Text style={{ fontSize: 16, color: '#D3D3D3' }}>
              Don't Have an Account?
            </Text>
            <Link
              href="/sign-up"
              style={{ fontSize: 16, fontWeight: '600', color: '#F3DEBA', marginLeft: 5 }}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
 