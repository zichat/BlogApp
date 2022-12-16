import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import SinglePost from "../components/post/SinglePost";
import { useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import FONTS from "../config/FONTS";

const HomeScreen = ({ navigation }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <ScrollView style={{ paddingVertical: verticalScale(10) }}>
        {posts.map((post) => (
          <SinglePost key={post.id} navigation={navigation} post={post} />
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("CreatePost")}
        activeOpacity={0.8}
        style={{
          position: "absolute",
          right: moderateScale(20),
          bottom: verticalScale(20),
          width: moderateScale(135),
          paddingVertical: verticalScale(10),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#B2D1FF",
          borderRadius: moderateScale(15),
        }}
      >
        <Ionicons name="add" size={FONTS.IconSize} style={{ marginRight: 5 }} />
        <Text style={{ fontFamily: FONTS.medium }}>CREATE</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
