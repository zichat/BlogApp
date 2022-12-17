import { View, Text } from "react-native";
import React from "react";
import { useGetPostsQuery } from "../redux/features/api/apiSlice";

const FavouriteScreen = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}
    >
      <Text>FavouriteScreen</Text>

      {isLoading ? (
        <Text>isLoading</Text>
      ) : (
        posts.posts.map((post)=>(
          console.log(post.id)
        ))
        )
      }

      {isError ? (<Text>Error</Text>):null}
    </View>
  );
};

export default FavouriteScreen;
