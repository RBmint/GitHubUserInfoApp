import React from 'react'

import contactData from '../mocks/contact.json'

import Repo from './Repo'

function RepoScreen  (props) { 
  return (<Repo newUser = {props.newUser} {...contactData}/>)
}

export default RepoScreen
