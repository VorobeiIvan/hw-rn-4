import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import { Button } from "../components";
import { ICONS, TITLE } from "../constants";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const tabBarOptions = ({ navigation }: { navigation: any }) => ({
    headerRightContainerStyle: { paddingRight: 16 },
    headerLeftContainerStyle: { paddingLeft: 16 },
    tabBarLabel: "",
    headerLeft: () => (
      <Button typeButton="goBack" onPress={() => navigation.goBack()}>
        <ICONS.ARROW_LEFT_NAV_BUTTON />
      </Button>
    ),
  });

  const tabPostsScreenOptions = () => ({
    title: TITLE.SCREEN_PUBLICATION_NAVIGATION_TITLE,
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <ICONS.HOME_NAV_BUTTON
        color={focused ? "activeColor" : "inactiveColor"}
      />
    ),
  });

  const tabCreatePostsScreenOptions = () => ({
    title: TITLE.SCREEN_CREATE_PUBLICATION_NAVIGATION_TITLE,
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <ICONS.CREATE_PUBLICATION_BUTTON
        color={focused ? "activeColor" : "inactiveColor"}
      />
    ),
  });

  const tabProfileScreenOptions = () => ({
    title: "",
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <ICONS.USER_PROFILE_BUTTON
        color={focused ? "activeColor" : "inactiveColor"}
      />
    ),
  });

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={tabBarOptions}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={tabPostsScreenOptions}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={tabCreatePostsScreenOptions}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={tabProfileScreenOptions}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
