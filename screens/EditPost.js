import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { verticalScale, moderateScale, scale } from "react-native-size-matters";
import COLORS from "../config/COLORS";
import FONTS from "../config/FONTS";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "../redux/features/posts/postsSlice";

const EditPost = ({ route, navigation }) => {

  const { postId } = route.params;

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onTitleChange = (text) => setTitle(text);
  const onContentChange = (text) => setContent(text);

  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content,
        })
      );

      navigation.push("DetailedPost", {postId: post.id})
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: verticalScale(72),
          paddingBottom: verticalScale(10),
          marginTop: verticalScale(24),
          marginHorizontal: moderateScale(16),
        }}
      >
        <TextInput
          placeholder="Topic"
          value={title}
          onChangeText={onTitleChange}
          style={{
            borderWidth: 0.5,
            borderColor: COLORS.grey,
            paddingHorizontal: moderateScale(16),
            paddingVertical: moderateScale(16),
            fontFamily: FONTS.medium,
            fontSize: FONTS.smallFont,
          }}
        />
      </View>
      <View
        style={{
          height: verticalScale(280),
          paddingBottom: verticalScale(10),
          marginHorizontal: moderateScale(16),
        }}
      >
        <TextInput
          placeholder="Content"
          value={content}
          onChangeText={onContentChange}
          numberOfLines={20}
          textAlignVertical="top"
          multiline={true}
          style={{
            borderWidth: 0.5,
            borderColor: COLORS.grey,
            paddingHorizontal: moderateScale(16),
            paddingVertical: moderateScale(16),
            fontFamily: FONTS.medium,
            fontSize: FONTS.smallFont,
            justifyContent: "flex-start",
          }}
        ></TextInput>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onSavePostClicked}
        style={{
          backgroundColor: COLORS.primary,
          padding: moderateScale(6),
          width: scale(72),
          height: verticalScale(36),
          alignSelf: "flex-end",
          alignItems: "center",
          justifyContent: "center",
          right: moderateScale(16),
          borderRadius: moderateScale(4),
        }}
      >
        <Text style={{ fontFamily: FONTS.regular, color: COLORS.white }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditPost;
