import React from 'react'

import contactData from '../mocks/contact.json'

import Follower from './follower'

function FollowerScreen  (props) { 
  return (<Follower newUser = {props.newUser} {...contactData} />)
}

export default FollowerScreen