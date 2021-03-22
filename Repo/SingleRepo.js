import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  repoNameColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ownerNameText: {
    color: 'blue',
    fontStyle: 'italic',
    fontSize: 20,
    justifyContent: 'center',
  },
  repoNameText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginRight: 10,
  },
  row: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  repoDescText: {
    fontSize: 16,
  },
  repoNameRow: {
    flex: 3,
    justifyContent: 'center',
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

function SingleRepo ({ containerStyle, repoName, ownerName, repoDesc }) {
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.repoNameRow}>
          <View style={styles.repoNameColumn}>
            <Text style={styles.repoNameText}>{repoName}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.ownerNameText}>Owner: {ownerName}</Text>
          <View style={styles.column}>
            <Text style={styles.repoDescText}>{repoDesc}</Text>          
          </View>
        </View>
      </View>
      <View style={styles.separatorOffset} />
      <View style={styles.separator} />
    </View>
  )
}

SingleRepo.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  repoName: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  repoDesc: PropTypes.string.isRequired
}

SingleRepo.defaultProps = {
  containerStyle: {},
}

export default SingleRepo
