import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import contactData from './mocks/contact.json'
import Profile from './Profile'
import Repo from './Repo'
import Following from './Following'
import Follower from './Follower'
/**
 * An empty home screen. Could be used in later assignment and currently have a 
 * button navigating to the profile screen.
 * @param {navigation} param0 the navigation data
 * @returns 
 */
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1,alignItems:'center', justifyContent:'center'  }}>
      <Button onPress={() => navigation.navigate('Profile', {newUser:"RBmint"})} title="See profile of RBmint" />
      <Button onPress={() => navigation.navigate('Repositories', {newUser:"RBmint"})} title="See repo of RBmint" />
      <Button onPress={() => navigation.navigate('Following', {newUser:"RBmint"})} title="See following of RBmint" />
      <Button onPress={() => navigation.navigate('Followers', {newUser:"RBmint"})} title="See follower of RBmint" />
    </View>
    
  );
}

/**
 * The main screen implemented. Contains information for a user in github.
 * @param {route} param0 the new user data
 * @returns the profile screen
 */
function ProfileScreen({ route }) {
  return (
    <Profile newUser={route.params == null ? "RBmint" : route.params.newUser} {...contactData}/> 
  )
}

/**
 * The screen contains public repository information for a github user.
 * @param {route} param0 the new user data
 * @returns the repo screen
 */

function RepositoriesScreen({ route }) {
  return (
    <Repo newUser={route.params == null ? "RBmint" : route.params.newUser} {...contactData}/>     
  );
}

/**
 * The screen contains follower data of the github user
 * @param {route} param0 the new user data
 * @returns an empty screen with a go back button
 */
function FollowersScreen({ route }) {
  return (
    <Follower newUser={route.params == null ? "RBmint" : route.params.newUser}/>
  );
}

/**
 * The screen contains the user data that current user is following 
 * @param {route} param0 the new user data
 * @returns an empty screen with a go back button
 */
function FollowingScreen({ route }) {
  return (
    <Following newUser={route.params == null ? "RBmint" : route.params.newUser}/>
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
        <Drawer.Screen name="Profile" component={ProfileScreen}/>
        <Drawer.Screen name="Repositories" component={RepositoriesScreen}/>
        <Drawer.Screen name="Followers" component={FollowersScreen}/>
        <Drawer.Screen name="Following" component={FollowingScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}