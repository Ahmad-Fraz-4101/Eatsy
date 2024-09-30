import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'

import {icons} from '../../constants'

const FormField = ({title,value,placeholder,handleChangeText,otherStyles, ...props}) => {

    const[showPassword,setshowPassword]=useState(false)
    
  return (
    <View style={{
        marginBottom:4,
        marginTop:20
    }}>
      <Text style={{color:'#D3D3D3' ,fontFamily:'Poppins-Medium'}} >{title}</Text>

      <View style={{backgroundColor:'#1E1E2D'}}className="border-2 border-black-200 w-full h-16 px-4 rounded-2xl focus:border-secondary items-center flex-row" >

        <TextInput
        className="flex-1 text-white font-psemibold text-base"
        vlaue={value}
        placeholder={placeholder}
        placeholderTextColor='#F3DEBA'
        onChangeText={handleChangeText}
        secureTextEntry={title==='Password' && !showPassword}
        />

        {title=== 'Password' && (
         <TouchableOpacity onPress={()=> setshowPassword(!showPassword)}>
            <Image
            source={!showPassword ? icons.eye: icons.eyeHide}
            className="w-6 h-6 mr-2"
            resizeMode='contain'
            />

         </TouchableOpacity>   
        )}

      </View>

    

    </View>
  )
}

export default FormField

//if classname Property Doesnt Work
// style={{
//     width:'100%',
//     height:50,
//     backgroundColor:'#1E1E2D',
//     borderWidth:1,
//     borderColor:'black',
//     borderRadius:10,
//    alignItems:'center',
//    flexDirection:'row',
//    padding:5
//   }}