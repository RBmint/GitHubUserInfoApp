import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  iconNameColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  usernameText: {
    color: 'green',
    fontSize: 16,
    justifyContent: 'center'
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  icon: {
    color: 'gray',
    fontSize: 40,
    marginBottom: 15
  },
  row: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarRow: {
    flex: 3,
    justifyContent: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 5,
    borderWidth: 3,
    height: 70,
    marginBottom: 5,
    marginLeft: 10,
    width: 70,
  },
  separatorOffset: {
    flex: 2,
    flexDirection: 'row',
  },
  separator: {
    borderColor: '#EDEDED',
    borderWidth: 0.5,
    flex: 8,
    flexDirection: 'row',
  },
})

/**
 * Renders the following card in the profile page.
 * @param {*} param0 a list of items
 * @returns the following card
 */
function SingleFollowing  ({ containerStyle, avatarUrl, name, username }) {
  const navigation = useNavigation();
  return(
    <View>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.avatarRow}>
          <Image
            style={styles.userImage}
            source={{uri: avatarUrl}}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.text}>{name == null ? "No Name!" : name}</Text>          
          </View>
          <Text 
            onPress={() => navigation.navigate("Profile", {newUser:username})} 
            style = {styles.usernameText}>
            Github: {username}
          </Text>
          
        </View>
      </View>
      <View style={styles.separatorOffset} />
      <View style={styles.separator} />
    </View>
  )
}

SingleFollowing.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  username: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired
}

SingleFollowing.defaultProps = {
  containerStyle: {},
  name: null,
}

export default SingleFollowing
