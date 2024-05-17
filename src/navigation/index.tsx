import React, {Profiler} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';
import Splash from 'src/screen/onBoarding/splash';
import Intro from 'src/screen/onBoarding/intro';
import Register from 'src/screen/onBoarding/register';
import Login from 'src/screen/onBoarding/login';
import Home from 'src/screen/tabs/home';
import Cart from 'src/screen/tabs/cart';
import Wishlist from 'src/screen/tabs/wishlist';
import Profile from 'src/screen/tabs/profile';
import CustomTabBar from 'src/navigation/customTabBar';
import MyOrder from 'src/screen/tabs/profile/myOrder';
import PrivacyPolicy from 'src/screen/tabs/profile/privacyPolicy';
import SettingScreen from 'src/screen/tabs/profile/setting';
import InviteFriend from 'src/screen/tabs/profile/inviteFriend';
import {BackHandler, ToastAndroid} from 'react-native';
import {STRING} from 'src/utils';
import Notification from 'src/screen/tabs/notification ';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

let backPressed = 0;
function handleBackButton() {
  if (backPressed > 0) {
    BackHandler.exitApp();
    backPressed = 0;
  } else {
    backPressed++;
    ToastAndroid.show(STRING.press_again, ToastAndroid.SHORT);
    setTimeout(() => {
      backPressed = 0;
    }, 1000);
    return true;
  }
}
export default (): JSX.Element | null => {
  function TabComponent() {
    return (
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        backBehavior={'none'}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name={Routes.Home}
          component={Home}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.Cart}
          component={Cart}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.Wishlist}
          component={Wishlist}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.Profile}
          component={Profile}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'simple_push',
          animationDuration: 200,
        }}
        initialRouteName={Routes.Splash}>
        <Stack.Screen name={Routes.Splash} component={Splash} />
        <Stack.Screen name={Routes.Intro} component={Intro} />
        <Stack.Screen name={Routes.Register} component={Register} />
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Dashboard} component={TabComponent} />
        <Stack.Screen name={Routes.MyOrder} component={MyOrder} />
        <Stack.Screen name={Routes.PrivacyPolicy} component={PrivacyPolicy} />
        <Stack.Screen name={Routes.SettingScreen} component={SettingScreen} />
        <Stack.Screen name={Routes.InviteFriend} component={InviteFriend} />
        <Stack.Screen name={Routes.Notification} component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
