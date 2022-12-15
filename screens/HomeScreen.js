import { View, Text, ScrollView } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import SinglePost from "../components/post/SinglePost";
import { useSelector } from "react-redux";

const HomeScreen = ({navigation}) => {
  const posts = useSelector((state) => state.posts);

  return (
    <ScrollView style={{ paddingVertical: verticalScale(10) }}>
      {posts.map((post) => (
        <SinglePost key={post.id} navigation={navigation} post= {post} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
