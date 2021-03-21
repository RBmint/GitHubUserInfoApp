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

import Email from './Email'
import Separator from './Separator'
import Bio from './Bio'
import Website from './Website'
import Profile_Creation_Date from './Profile_creation_date'
import RepoCount from './Repocount';
import FollowerCount from './Follower'
import FollowingCount from './Following'
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
})

class Contact extends Component {

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
          source={{uri: avatarBackground}}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{uri: avatar}}
            />
            <Text style={styles.NameText}>{name}</Text>
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
                  {username}
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
            email={email}
          />
        )
      }}
    />
  )

  renderEmailtest = () => (
    <FlatList
      contentContainerStyle={styles.basicContainer}
      data={this.props.emails}
      renderItem={(list) => {
        const { email, id, iconName } = list.item
        return (
          <Emailtest
            key={`email-${id}`}
            iconName={iconName}
            email={email}
            onPressEmail={this.onPressEmail}

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
            key={`email-${id}`}
            iconName={iconName}
            website={website}
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
            bio={bio}
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
            key={`bio-${id}`}
            iconName={iconName}
            Profile_Creation_Date={profile_cd}
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
            key={`bio-${id}`}
            iconName={iconName}
            RepoCount={repocount}
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
            key={`bio-${id}`}
            iconName={iconName}
            followerCount={followerCount}
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
            key={`bio-${id}`}
            iconName={iconName}
            FollowingCount={followingCount}
          />
        )
      }}
    />
  )

  render() {
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

  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }
}

export default Contact
