import React from 'react'

import contactData from '../mocks/contact.json'

import Profile from './profile'

function ProfileScreen  (navigation) { 
  return (<Profile {...contactData} navigation={navigation}/>)
}

export default ProfileScreen
