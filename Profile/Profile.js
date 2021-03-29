import React, { Component } from 'react'
import { Card, Icon } from 'react-native-elements'
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  LogBox
} from 'react-native'

import Email from './email'
import Separator from './separator'
import Bio from './bio'
import Website from './website'
import Profile_Creation_Date from './profile_creation_date'
import RepoCount from './repo_count';
import FollowerCount from './follower'
import FollowingCount from './following'
import ProfileFetch from './profile_fetch'
import PrivateToken from './token'
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  basicContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  iconNameRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  usernameRow: {
    backgroundColor: 'transparent',
  },
  usernameText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  NameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
  errorLoadingStyle: {
    fontSize: 60,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 100,
  },
})

/**
 * This class has all the information regarding the profile page and is in charge
 * of rendering all components inside it.
 */
class Profile extends Component {

  /**
   * The default constructor will try to fetch using GraphQL and the token
   * and set the data into the state.
   * @param {*} props parent props data
   */
  constructor(props) {
    super(props)
    const accessToken = PrivateToken;
    this.state = {
      //Default state is loading.
      Loading: true,
      Error: false
    };
    this.profile = new ProfileFetch(accessToken);
    this.setProfile(this.props.newUser);
  }
  
  /**
   * This async function will get the JSON data and set it into the state.
   */
  async setProfile(username) {
    const response = await this.profile.getProfile(username);
    this.setState({
      //Not loading anymore.
      Loading: false
    })
    try{
      this.setState({
        avatarUrl: response.data.user.avatarUrl,
        name: response.data.user.name,
        username: response.data.user.login,
        bio: response.data.user.bio,
        website: response.data.user.websiteUrl,
        email: response.data.user.email,
        publicRepoCount: response.data.user.repositories.totalCount,
        followersCount: response.data.user.followers.totalCount,
        followingCount: response.data.user.following.totalCount,
        creationDate: response.data.user.createdAt
      })
    } catch(error) {
      this.setState({
        Error: true
      });
    }
  }

  renderHeader = () => {
    const {
      avatar,
      avatarBackground,
      name,
      username,
    } = this.props

    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{uri: "https://i.imgur.com/rXVcgTZ.jpg"}}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{uri: this.state.avatarUrl}}
            />
            <Text style={styles.NameText}>{this.state.name == null ? "No data found" : this.state.name}</Text>
            <View style={styles.iconNameRow}>
              <View>              
                <Icon
                  name="account-circle"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                />
              </View>
              <View style={styles.usernameRow}>
                <Text style={styles.usernameText}>
                  {this.state.username == null ? "No data found" : this.state.username}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  renderEmail = () => (
    <FlatList
      contentContainerStyle={styles.basicContainer}
      data={this.props.emails}
      renderItem={(list) => {
        const { email, id, iconName } = list.item
        return (
          <Email
            key={`email-${id}`}
            iconName={iconName}
            email={this.state.email == null ? "No data found" : this.state.email}
          />
        )
      }}
    />
  )

  renderWebsite = () => (
    <FlatList
      contentContainerStyle={styles.basicContainer}
      data={this.props.website}
      renderItem={(list) => {
        const { website, id, iconName } = list.item
        return (
          <Website
            key={`website-${id}`}
            iconName={iconName}
            website={this.state.website == null ? "No data found" : this.state.website}
          />
        )
      }}
    />
  )

  renderBio = () => (
    <FlatList
      contentContainerStyle={styles.basicContainer}
      data={this.props.bio}
      renderItem={(list) => {
        const { bio, id, iconName } = list.item
        return (
          <Bio
            key={`bio-${id}`}
            iconName={iconName}
            bio={this.state.bio == null ? "No data found" : this.state.bio}
          />
        )
      }}
    />
  )

  renderProfileCreationDate = () => (
    <FlatList
      contentContainerStyle={styles.basicContainer}
      data={this.props.profile_cd}
      renderItem={(list) => {
        const { profile_cd, id, iconName } = list.item
        return (
          <Profile_Creation_Date
            key={`profile_cd-${id}`}
            iconName={iconName}
            Profile_Creation_Date={this.state.creationDate == null ? "No data found" : this.state.creationDate}
          />
        )
      }}
    />
  )
    
  renderRepoCount = () => (
    <FlatList
      contentContainerStyle={styles.basicContainer}
      data={this.props.repocount}
      renderItem={(list) => {
        const { repocount, id, iconName } = list.item
        return (
          <RepoCount
            key={`repocount-${id}`}
            iconName={iconName}
            RepoCount={this.state.publicRepoCount == null ? "No data found" : this.state.publicRepoCount}
            newUser = {this.props.newUser}
          />
        )
      }}
    />
  )

  renderFollowerCount = () => (
    <FlatList
      contentContainerStyle={styles.basicContainer}
      data={this.props.followerCount}
      renderItem={(list) => {
        const { followerCount, id, iconName } = list.item
        return (
          <FollowerCount
            key={`followerCount-${id}`}
            iconName={iconName}
            followerCount={this.state.followersCount == null ? "No data found" : this.state.followersCount}
          />
        )
      }}
    />
  )

  renderFollowingCount = () => (
    <FlatList
      contentContainerStyle={styles.basicContainer}
      data={this.props.followingCount}
      renderItem={(list) => {
        const { followingCount, id, iconName } = list.item
        return (
          <FollowingCount
            key={`followingCount-${id}`}
            iconName={iconName}
            FollowingCount={this.state.followingCount == null ? "No data found" : this.state.followingCount}
            newUser = {this.props.newUser}
          />
        )
      }}
    />
  )

  componentDidUpdate(newProps){
    console.log("cdUcalled,new user is" + newProps.newUser);
    console.log("current user is " + this.props.newUser)
    if (newProps.newUser != this.props.newUser) {  
      this.setProfile(this.props.newUser);
      console.log("set new user =" + this.props.newUser)    
      this.props.newUser = newProps.newUser;
    }
  }

  /**
   * Renders everything in the profile page.
   * @returns the profile page
   */
  render() {

    if (this.state.Error) {
      return (<View style={styles.container}>
        <Text style={styles.errorLoadingStyle}>Fetch Error!</Text>
      </View>)
    } else if (this.state.Loading) {
      return (<View style={styles.container}>
        <Text style={styles.errorLoadingStyle}>Loading...</Text>
      </View>)
    } else {
      return (
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <Card containerStyle={styles.cardContainer}>
              {this.renderHeader()}
              {Separator()}
              {this.renderEmail()}
              {Separator()}
              {this.renderWebsite()}
              {Separator()}
              {this.renderBio()}        
              {Separator()}
              {this.renderRepoCount()}
              {Separator()}
              {this.renderFollowerCount()}
              {Separator()}
              {this.renderFollowingCount()}
              {Separator()}
              {this.renderProfileCreationDate()}
            </Card>
          </View>
        </ScrollView>
      )
    }
  }

  /**
   * Ignore some logs because they cannot be avoided.
   */
  componentDidMount() {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreLogs(["Failed child context type"]);
  }
}

export default Profile
