import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  iconNameColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconNameText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
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
  },
  row: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 20
  },
  text: {
    fontSize: 14,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
})

const Bio = ({ containerStyle, iconName, bio }) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.iconRow}>
      <View style={styles.iconNameColumn}>
        {iconName.length !== 0 && (
          <Text style={styles.iconNameText}>{iconName}</Text>
        )}
      </View>
      <Icon
          name="article"
          underlayColor="transparent"
          iconStyle={styles.icon}
      />
    </View>
    <View style={styles.row}>     
      <View style={styles.column}>
        <Text style={styles.text}>{bio}</Text>
      </View>
    </View>
  </View>
)

Bio.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  bio: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}

Bio.defaultProps = {
  containerStyle: {},
  iconName: null,
}

export default Bio
