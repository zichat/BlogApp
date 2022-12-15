import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Comfortaa_400Regular, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
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

const Tab = createBottomTabNavigator();

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
    <NavigationContainer
      onReady={onLayoutRootView}
      theme={scheme === "dark" ? DarkTheme : LightTheme}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleStyle: { fontFamily: "ComfortaaMedium", fontSize: 25,},
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
                size = {FONTS.IconSize}
                color = {COLORS.textTitle}
                style={{paddingHorizontal:moderateScale(16)}}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen options={{headerTitle: "My Blogs"}} name="Favourite" component={FavouriteScreen} />
        <Tab.Screen options={{
            headerRight: () => (
              <Ionicons
                onPress={() => alert("This is a Icon!")}
                name="log-out-outline"
                size = {FONTS.IconSize}
                color = {COLORS.primary}
                style={{paddingHorizontal:moderateScale(16)}}
              />
            ),
          }} name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
