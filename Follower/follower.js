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
import FollowerFetch from './follower_fetch'
import PrivateToken from '../Profile/token'
import SingleFollower from './single_follower'
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
 * This class is in charge of rendering the follower screen.
 */
class Follower extends Component {

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
    this.follower = new FollowerFetch(accessToken);
    this.setFollower(props.newUser);
  }

  componentDidUpdate(newProps){
    if (newProps.newUser != this.props.newUser) {  
      this.setFollower(this.props.newUser);
      this.props.newUser = newProps.newUser;
    }
  }

  /**
   * This async function will get the JSON data and set it into the state.
   */
  async setFollower(username) {
    const response = await this.follower.getFollower(username);
    this.setState({
      Loading: false
    })
    try {
      this.setState({
        edges: response.data.user.followers.edges  
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
              {this.props.newUser}
            </Text>            
            <View style={styles.publicRepoNameRow}>
              <Text style={styles.publicRepoNameText}>
                Follower
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  renderSingleFollower = (avatarUrl, name, username) => (
    <FlatList
      contentContainerStyle={styles.basicContainer}
      data={this.props.repo1}
      renderItem={(list) => {
        const { id, repoName, ownerName, repoDesc } = list.item
        return (
          <SingleFollower
            key={`repo-${id}`}
            avatarUrl={avatarUrl}
            name={name}
            username={username}
          />
        )
      }}
    />
  )

  /**
   * This function renders everything needed for the follower page.
   * @returns the follower page
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
              {this.state.edges != null ? this.state.edges.map(n => (this.renderSingleFollower(n.node.avatarUrl, n.node.name, n.node.login))) : Separator()}
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
    LogBox.ignoreLogs(["Failed child context"])
  }
}

export default Follower