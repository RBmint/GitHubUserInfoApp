import React from 'react'

import contactData from '../mocks/contact.json'

import Profile from './Profile'

function ProfileScreen  (props) { 
  return (<Profile newUser = {props.newUser} {...contactData}/>)
}

export default ProfileScreen
