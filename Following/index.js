import React from 'react'

import contactData from '../mocks/contact.json'

import Following from './following'

function FollowingScreen  (props) { 
  return (<Following newUser = {props.newUser} {...contactData} />)
}

export default FollowingScreen
