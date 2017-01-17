import fetch from 'isomorphic-fetch'
import { ActionTypes } from 'actionTypes'
import { serverUrl } from 'utils/constants'

/**
 * Create Partial Deck
 */
export function createPartialDeckAction () {
  return dispatch => {
    dispatch(createPartialDeckRequest())

    fetch (`${serverUrl}/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC`, {})
    .then(response => {
      if (!response.success) {
        dispatch(createPartialDeckFailure())
      }

      dispatch(createPartialDeckSuccess(response.json()))
    })
  }
}

function createPartialDeckRequest () {
  return {
    type: ActionTypes.CREATE_DECK_REQUEST,
    isSubmitting: true
  }
}

function createPartialDeckSuccess (deckInfo) {
  return {
    type: ActionTypes.CREATE_DECK_SUCCESS,
    isSubmitting: false,
    deckInfo
  }
}

function createPartialDeckFailure () {
  return {
    type: ActionTypes.CREATE_DECK_FAILURE,
    isSubmitting: false,
    err: 'Creating deck is failed.'
  }
}
