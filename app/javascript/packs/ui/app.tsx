import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux'

import _ from 'lodash'

import store from '@ui/store';
import { updateCurrentUser } from '@ui/actions'

import user from '@sdk/user'

async function signOut () {
  await user.signOut()
  document.location.pathname = '/'
}

export default function App() {
  const current_user = (store.getState() as any).current_user
  return (
    <Provider store={store}>
      <Router basename="/ui">
        Welcome {current_user.email}!
      </Router>
    </Provider>
  );
}

export async function start () {
  return await user.current().then(
    function (current_user) {
      store.dispatch(updateCurrentUser(current_user.data))
      ReactDOM.render(
        App(),
        document.getElementById('ui-app')
      )
    },
    function() {
      document.location.pathname = '/';
    }
  )
}
