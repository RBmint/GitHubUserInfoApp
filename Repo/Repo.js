import React, { Component } from 'react'
import { Card } from 'react-native-elements'
import {
  FlatList,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  LogBox,
} from 'react-native'

import Separator from './Separator'
import SingleRepo from './SingleRepo';
import ProfileFetch from '../Profile_fetch'
import PrivateToken from '../Profile/Token'

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
  scroll: {
    backgroundColor: '#FFF',
  },
  publicRepoNameRow: {
    backgroundColor: 'transparent',
  },
  publicRepoNameText: {
    color: '#A5A5A5',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  usernameText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
})

class Contact extends Component {

  constructor(props) {
    super(props)
    const accessToken = PrivateToken;
    this.state = {};
    this.profile = new ProfileFetch(accessToken);
    this.setProfile();
  }

  async setProfile() {
    const response = await this.profile.getProfile();
    this.setState({
      avatarUrl: response.data.viewer.avatarUrl,
      name: response.data.viewer.name,
      username: response.data.viewer.login,
      bio: response.data.viewer.bio,
      website: response.data.viewer.websiteUrl,
      email: response.data.viewer.email,
      publicRepoCount: response.data.viewer.repositories.totalCount,
      followersCount: response.data.viewer.followers.totalCount,
      followingCount: response.data.viewer.following.totalCount,
      creationDate: response.data.viewer.createdAt,
      edges: response.data.viewer.repositories.edges
    })
  }
  
  renderHeader = () => {
    const {
      avatarBackground,
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
            <Text style={styles.usernameText}>
              {username}
            </Text>            
            <View style={styles.publicRepoNameRow}>
              <Text style={styles.publicRepoNameText}>
                Public Repositories
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  renderSingleRepo = (reponame, ownername, repodesc) => (
    <FlatList
      contentContainerStyle={styles.basicContainer}
      data={this.props.repo1}
      renderItem={(list) => {
        const { id, repoName, ownerName, repoDesc } = list.item
        return (
          <SingleRepo
            key={`repo-${id}`}
            repoName={reponame}
            ownerName={ownername}
            repoDesc={repodesc==null ? "No Description!" : repodesc}
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
            {this.state.edges != null ? this.state.edges.map(n => (this.renderSingleRepo(n.node.name, n.node.owner.login, n.node.description))) : Separator()}
          </Card>
        </View>
      </ScrollView>
    )
  }

  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Each child in a list']);
  }
}

export default Contact
