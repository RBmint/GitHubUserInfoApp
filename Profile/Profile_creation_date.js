import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  iconNameColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconNameText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 6,
    justifyContent: 'center'
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  icon: {
    color: 'gray',
    fontSize: 40,
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

const Profile_Creation_Date = ({ containerStyle, iconName, Profile_Creation_Date }) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.iconRow}>
      <View style={styles.iconNameColumn}>
        {iconName.length !== 0 && (
          <Text style={styles.iconNameText}>{iconName}</Text>
        )}
      </View>
      <Icon
          name="info"
          underlayColor="transparent"
          iconStyle={styles.icon}
      />
    </View>
    <View style={styles.row}>     
      <View style={styles.column}>
        <Text style={styles.text}>{Profile_Creation_Date}</Text>
      </View>
    </View>
  </View>
)

Profile_Creation_Date.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  Profile_Creation_Date: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}

Profile_Creation_Date.defaultProps = {
  containerStyle: {},
  iconName: null,
}

export default Profile_Creation_Date
