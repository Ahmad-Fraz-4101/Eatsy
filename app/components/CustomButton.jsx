import { TouchableOpacity ,Text} from 'react-native'
import React from 'react'




const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    style={[
        {
          backgroundColor: isLoading ? '#FEE8B0' : '#F3DEBA',
          borderRadius: 10,
          minHeight: 62,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: isLoading ? 0.5 : 1,
          width:'100%',
          marginTop:30
        } 
      ]}
    disabled={isLoading}
    >
      <Text classname={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
         </Text>

    </TouchableOpacity>
  )
}

export default CustomButton