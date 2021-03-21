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

const Email = ({ containerStyle, iconName, email }) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.iconRow}>
      <View style={styles.iconNameColumn}>
        {iconName.length !== 0 && (
          <Text style={styles.iconNameText}>{iconName}</Text>
        )}
      </View>
      <Icon
          name="email"
          underlayColor="transparent"
          iconStyle={styles.icon}
      />
    </View>
    <View style={styles.row}>     
      <View style={styles.column}>
        <Text style={styles.text}>{email}</Text>
      </View>
    </View>
  </View>
)

Email.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  email: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}

Email.defaultProps = {
  containerStyle: {},
  iconName: null,
}

export default Email
