import React from 'react'

import contactData from '../mocks/contact.json'

import Following from './following'

function FollowingScreen  (props) { 
  console.log("follwoing screen props" + props.newUser);
  return (<Following newUser = {props.newUser} {...contactData} />)
}

export default FollowingScreen
