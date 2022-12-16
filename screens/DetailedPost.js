import { View, Text } from 'react-native'
import React from 'react'

const DetailedPost = ({route, navigation}) => {
    const { postId} = route.params
  return (
    <View>
      <Text>DetailedPost: {postId}</Text>
    </View>
  )
}

export default DetailedPost