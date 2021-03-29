import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import contactData from './mocks/contact.json'
import Profile from './Profile'
import Repo from './Repo'

/**
 * An empty home screen. Could be used in later assignment and currently have a 
 * button navigating to the profile screen.
 * @param {navigation} param0 the navigation data
 * @returns 
 */
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1,alignItems:'center', justifyContent:'center'  }}>
      <Text>
        This is currently empty!
      </Text>
      <Button onPress={() => navigation.navigate('Profile')} title="See profile screen" />
    </View>
  );
}

/**
 * The main screen implemented. Contains information for a user in github.
 * @returns the profile screen
 */
function ProfileScreen() {
  return (
    <Profile {...contactData}/> 
  )
}

/**
 * The screen contains public repository information for a github user.
 * @param {navigation} param0 the navigation data
 * @returns the repo screen
 */
function RepositoriesScreen({ navigation }) {
  return (
    <Repo {...contactData}/>
  );
}

/**
 * The screen contains follower data of the github user
 * it has not been implemented yet
 * @param {navigation} param0 the navigation data
 * @returns an empty screen with a go back button
 */
function FollowersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Empty Follower Screen to be implemented next week.</Text>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}

/**
 * The screen contains the user data that current user is following 
 * it has not been implemented yet
 * @param {navigation} param0 the navigation data
 * @returns an empty screen with a go back button
 */
function FollowingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Empty Following Screen to be implemented next week.</Text>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}


const Drawer = createDrawerNavigator();
/**
 * This function contains the main page of the app, which consists of a drawer 
 * navigator and 5 distinct pages.
 * @returns The drawer navigation with 5 tabs.
 */
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Repositories" component={RepositoriesScreen}/>
        <Drawer.Screen name="Followers" component={FollowersScreen}/>
        <Drawer.Screen name="Following" component={FollowingScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}