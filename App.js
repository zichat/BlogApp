import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import {
  Comfortaa_400Regular,
  Comfortaa_500Medium,
} from "@expo-google-fonts/comfortaa";
import { DarkTheme, LightTheme } from "./config/THEME";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import COLORS from "./config/COLORS";
import FONTS from "./config/FONTS";
import { useEffect } from "react";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailedPost from "./screens/DetailedPost";
import CreatePost from "./screens/CreatePost";
import EditPost from "./screens/EditPost";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./redux/features/api/apiSlice";
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: FONTS.medium, fontSize: 25 },
      }}
    >
      <HomeStack.Screen
        options={{
          headerTitle: "Home",
          headerRight: () => (
            <Ionicons
              onPress={() => alert("This is a Icon!")}
              name="search-outline"
              size={FONTS.IconSize}
              style={{ paddingHorizontal: moderateScale(16) }}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <HomeStack.Screen options={{headerTitle: "Post Details"}} name="DetailedPost" component={DetailedPost} />
      <HomeStack.Screen options={{headerTitle: "Create Post"}} name="CreatePost" component={CreatePost} />
      <HomeStack.Screen options={{headerTitle: "Edit Post"}} name="EditPost" component={EditPost} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  const scheme = useColorScheme();

  const [fontsLoaded] = Font.useFonts({
    ComfortaaRegular: Comfortaa_400Regular,
    ComfortaaMedium: Comfortaa_500Medium,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("Fonts Notloaded");
    return null;
  }

  return (
    <ApiProvider api={apiSlice}>
      <NavigationContainer
        onReady={onLayoutRootView}
        theme={scheme === "dark" ? DarkTheme : LightTheme}
      >
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Favourite") {
                iconName = focused ? "heart" : "heart-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarStyle: {
              height: verticalScale(50),
              paddingBottom: 10,
              paddingTop: 10,
              alignContent: "center",
            },
          })}
        >
          <Tab.Screen
            options={{
              headerRight: () => (
                <Ionicons
                  onPress={() => alert("This is a Icon!")}
                  name="search-outline"
                  size={FONTS.IconSize}
                  color={COLORS.textTitle}
                  style={{ paddingHorizontal: moderateScale(16) }}
                />
              ),
            }}
            name="Home"
            component={HomeStackScreen}
          />
          <Tab.Screen
            options={{ headerTitle: "My Blogs" }}
            name="Favourite"
            component={FavouriteScreen}
          />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApiProvider>
  );
}
