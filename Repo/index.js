import React from 'react'

import contactData from '../mocks/contact.json'

import Repo from './Repo'

function ProfileScreen  (navigation) { 
  return (<Repo {...contactData} navigation={navigation}/>)
}

export default ProfileScreen
