import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  iconNameColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconNameText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 8,
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
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
})

function FollowingCount ({ containerStyle, iconName, FollowingCount }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Following')}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.iconRow}>
          <View style={styles.iconNameColumn}>
            <Text style={styles.iconNameText}>{iconName}</Text>
          </View>
          <Icon
              name="group"
              underlayColor="transparent"
              iconStyle={styles.icon}
          />
        </View>
        <View style={styles.row}>     
          <View style={styles.column}>
            <Text style={styles.text}>{FollowingCount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

FollowingCount.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  FollowingCount: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}

FollowingCount.defaultProps = {
  containerStyle: {},
  iconName: null,
}

export default FollowingCount
