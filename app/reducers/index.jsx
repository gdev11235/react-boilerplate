import { combineReducers } from 'redux'
import { ActionTypes } from 'actionTypes'

function createPartialDeckProcess (state = { type: ''}, action) {
  switch (action.type) {
    case ActionTypes.createPartialDeckRequest:
    case ActionTypes.createPartialDeckRequest:
    case ActionTypes.createPartialDeckRequest:
      console.log(state, action);
      return Object.assign({}, state, action)

    default:
      return state
  }
}
