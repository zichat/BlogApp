import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React from "react";
import {
  verticalScale,
  moderateScale,
  scale,
  moderateVerticalScale,
} from "react-native-size-matters";
import FONTS from "../../config/FONTS";

const SinglePost = ({ post, navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("DetailedPost")}>
      <View
        style={{
          paddingHorizontal: moderateScale(15),
          marginBottom: moderateVerticalScale(16),
          marginHorizontal: moderateScale(8),
          paddingVertical: verticalScale(14),
          elevation: 1,
          borderColor: "grey",
          shadowColor: "grey",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
        }}
      >
        <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
          <Image
            style={{
              flex: 1,
              width: moderateScale(40),
              height: verticalScale(40),
              marginRight: moderateScale(10),
              resizeMode: "contain",
            }}
            source={require("../../assets/profile/avatar.png")}
          ></Image>
          <View style={{ flex: 5 }}>
            <Text
              style={{ fontFamily: FONTS.medium, fontSize: FONTS.meduimFont }}
            >
              {post.title}
            </Text>
            <Text
              style={{ fontFamily: FONTS.regular, fontSize: FONTS.smallFont }}
            >
              Zichat Ezekiel
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: verticalScale(10),
            paddingHorizontal: moderateScale(5),
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: FONTS.smallFont,
            }}
          >
            {post.content.substring(0, 100)}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SinglePost;
