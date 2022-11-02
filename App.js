import { useFonts } from 'expo-font';

import Details from './components/Details';
import Home from './components/Home';
import Liked from './components/Liked';
import Profile from './components/Profile';

import colors from "./assets/colors/colors"

import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}
    >
      <Tab.Screen 
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name='Liked'
        component={Liked}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="heart" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name='Profile'
        component={Profile}     
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={24} color={color} />,
          headerShown: false,
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {

  const [loaded] = useFonts({
    'bold': require('./assets/fonts/Lato-Bold.ttf'),
    'light': require('./assets/fonts/Lato-Light.ttf'),
    'regular': require('./assets/fonts/Lato-Regular.ttf'),
    'thin': require('./assets/fonts/Lato-Thin.ttf'),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='TabNavigator'
          component={TabNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Details'
          component={Details}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});
