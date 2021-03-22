import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import contactData from './mocks/contact.json'
import Profile from './Profile'
import Repo from './Repo'

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

function ProfileScreen() {
  return (
    <Profile {...contactData}/> 
  )
}

function RepositoriesScreen({ navigation }) {
  return (
    <Repo {...contactData}/>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Button onPress={() => navigation.goBack()} title="Go back" />
    // </View>
  );
}

function FollowersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Empty Follower Screen to be implemented next week.</Text>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}

function FollowingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Empty Following Screen to be implemented next week.</Text>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
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