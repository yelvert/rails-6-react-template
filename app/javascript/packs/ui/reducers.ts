import { UPDATE_CURRENT_USER, updateCurrentUser } from './actions'
import { combineReducers } from 'redux'

function current_user(state = {}, action) {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return action.user
    default:
      return state
  }
}

const reducers = combineReducers({
  current_user,
})
export default reducers
