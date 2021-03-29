import React from 'react'

import contactData from '../mocks/contact.json'

import Repo from './Repo'

function RepoScreen  (props) { 
  console.log("repo new user " + props.newUser)
  return (<Repo newUser = {props.newUser} {...contactData}/>)
}

export default RepoScreen
