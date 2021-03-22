import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

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
    fontSize: 10,
    fontWeight: 'bold',
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
  },
  text: {
    fontSize: 20,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
})

/**
 * Renders the website card in the profile page.
 * @param {*} param0 a list of items
 * @returns the website card
 */
const Website = ({ containerStyle, iconName, website }) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.iconRow}>
      <View style={styles.iconNameColumn}>
        <Text style={styles.iconNameText}>{iconName}</Text>
      </View>
      <Icon
          name="explore"
          underlayColor="transparent"
          iconStyle={styles.icon}
      />
    </View>
    <View style={styles.row}>     
      <View style={styles.column}>
        <Text style={styles.text}>{website}</Text>
      </View>
    </View>
  </View>
)

Website.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  website: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}

Website.defaultProps = {
  containerStyle: {},
  iconName: null,
}

export default Website
