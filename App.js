import React from 'react';
import { StyleSheet} from 'react-native';
import { HomeScreen } from './components/HomeScreen/HomeScreen'
import { SinglePost } from './components/SinglePost/SinglePost'
import { ProfileScreen } from './components/ProfileScreen/ProfileScreen'
import { ScannerScreen } from './components/ScannerScreen/ScannerScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Post: SinglePost,
})

export default createBottomTabNavigator(
  {
    Events: HomeStack,
    Profile: ProfileScreen,
    Scanner: ScannerScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Events') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Scanner') {
          iconName = `ios-qr-scanner${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


