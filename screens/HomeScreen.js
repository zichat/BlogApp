import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const HomeScreen = () => {
  return (
    <ScrollView style={{paddingHorizontal: moderateScale(20), paddingVertical: verticalScale(10)}}>
        <Text>Home</Text>
    </ScrollView>
  )
}

export default HomeScreen