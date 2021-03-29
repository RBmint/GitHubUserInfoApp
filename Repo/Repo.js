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

import Separator from './separator'
import SingleRepo from './single_repo';
import ProfileFetch from '../profile_fetch'
import PrivateToken from '../Profile/token'

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
  errorLoadingStyle: {
    fontSize: 60,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 100,
  },
})

/**
 * This class is in charge of rendering the repository screen.
 */
class Contact extends Component {

  /**
   * This default constructor will get data from the GraphQL query using the 
   * token and set the data into the state.
   * @param {*} props the props from parent
   */
  constructor(props) {
    super(props)
    const accessToken = PrivateToken;
    this.state = {
      Loading: true,
      Error: false
    };
    this.profile = new ProfileFetch(accessToken);
    this.setProfile();
  }

  /**
   * This async function will get the JSON data and set it into the state.
   */
  async setProfile() {
    const response = await this.profile.getProfile();
    this.setState({
      Loading: false
    })
    try {
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
    } catch(error) {
      this.setState({
        Error: true
      });
    }
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

  /**
   * This function renders everything needed for the repository page.
   * @returns the repository page
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
              {this.state.edges != null ? this.state.edges.map(n => (this.renderSingleRepo(n.node.name, n.node.owner.login, n.node.description))) : Separator()}
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
    LogBox.ignoreLogs(["Each child in a list"]);
  }
}

export default Contact
