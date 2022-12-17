import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import {
  scale,
  moderateScale,
  verticalScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import FONTS from "../config/FONTS";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useGetPostQuery } from "../redux/features/api/apiSlice";
import COLORS from "../config/COLORS";

const height = Dimensions.get("window").height;

const DetailedPost = ({ route, navigation }) => {
  const { postId } = route.params;

  const { data: post, isLoading, isSuccess, isError } = useGetPostQuery(postId);

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isSuccess ? (
        <>
          <View
            style={{
              flex: 1,
              paddingHorizontal: moderateScale(15),
              marginBottom: moderateVerticalScale(16),
              marginHorizontal: moderateScale(8),
              paddingVertical: verticalScale(14),
              height: verticalScale(height / 2),
              alignItems: "flex-start",
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Image
                style={{
                  flex: 1,
                  width: moderateScale(40),
                  height: verticalScale(40),
                  marginRight: moderateScale(10),
                  resizeMode: "contain",
                }}
                source={require("../assets/profile/avatar.png")}
              ></Image>
              <View style={{ flex: 5 }}>
                <Text
                  selectable={true}
                  selectionColor="pink"
                  style={{
                    fontFamily: FONTS.medium,
                    fontSize: FONTS.meduimFont,
                  }}
                >
                  {post.title}
                </Text>
                <Text
                  selectable={true}
                  selectionColor="pink"
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: FONTS.smallFont,
                  }}
                >
                  Zichat Ezekiel
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingVertical: verticalScale(10),
                paddingHorizontal: moderateScale(5),
                flex: 10,
              }}
            >
              <Text
                selectable={true}
                selectionColor="pink"
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: FONTS.smallFont,
                  lineHeight: 25,
                }}
              >
                {post.body}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("EditPost", { postId: postId })}
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
            <Ionicons
              name="pencil"
              size={FONTS.IconSize}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontFamily: FONTS.medium }}>Edit</Text>
          </TouchableOpacity>
        </>
      ) : isError ? (
        <Text>Error</Text>
      ) : null}
    </>
  );
};

export default DetailedPost;
