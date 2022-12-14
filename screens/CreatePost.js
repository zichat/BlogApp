import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { verticalScale, moderateScale, scale } from "react-native-size-matters";
import COLORS from "../config/COLORS";
import FONTS from "../config/FONTS";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../redux/features/posts/postsSlice";
import { useAddNewPostMutation } from "../redux/features/api/apiSlice";

const tags = ["history", "american", "crime"];
const reactions = 1;
const userId = 2;
const Id = 202;

const CreatePost = ({ navigation }) => {
  const [addNewPost, { isLoading }] = useAddNewPostMutation();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [userId, setUserId] = useState(9);

  const canSave = [title, content].every(Boolean) && !isLoading;

  const users = useSelector((state) => state.users);

  const onTitleChange = (text) => setTitle(text);
  const onContentChange = (text) => setContent(text);

  const dispatch = useDispatch();

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await addNewPost({ Id, title, body: content, userId, tags, reactions });
      } catch (e) {
        console.error("failed to add new post", e);
      }
    }

    setTitle("");
    setContent("");

    navigation.navigate("DetailedPost", {postId: Id})
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

export default CreatePost;
