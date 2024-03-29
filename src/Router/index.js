import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  SignIn,
  SignUp,
  SplashScreen,
  Home,
  DonasiSaya,
  Profile,
  ProgramDetail,
  Checkout,
  OrderSummary,
  CallApiVanilaJs,
  CallApiAxios,
  LocalAPI,
  DetailProfile,
  News,
  NewsDetail,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Donasi Saya" component={DonasiSaya} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen} //ambil dari component Splash Screen
        options={{headerShown: false}} //option untuk menyembunyikan halaman yang saat ini
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn} //ambil dari component SignIn
        options={{headerShown: false}} //option untuk menyembunyikan halaman yang saat ini
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProgramDetail"
        component={ProgramDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CallApiAxios"
        component={CallApiAxios}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LocalAPI"
        component={LocalAPI}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Donasi Saya"
        component={DonasiSaya}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Detail Profile"
        component={DetailProfile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="News"
        component={News}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="News Detail"
        component={NewsDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
