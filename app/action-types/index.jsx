import keymirror from 'keymirror'

export const ActionTypes = keymirror({
  CREATE_DECK_REQUEST: null,
  CREATE_DECK_SUCCESS: null,
  CREATE_DECK_FAILURE: null,

  GENERATE_DECK_REQUEST: null,
  GENERATE_DECK_SUCCESS: null,
  GENERATE_DECK_FAILURE: null,

  RESHUFFLE_DECK_REQUEST: null,
  RESHUFFLE_DECK_SUCCESS: null,
  RESHUFFLE_DECK_FAILURE: null
})
