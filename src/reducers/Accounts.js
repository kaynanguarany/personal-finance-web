import types from '../actions/Types';

const INITIAL_STATE = { 
    hasErrored: false,
    isLoading: false,
    accounts: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case types.ERRORED:
          return { ...state, hasErrored: action.payload }
      case types.FETCHING_DATA:
          return { ...state, isLoading: action.payload }
      case types.ACCOUNTS:
          return { ...state, accounts: action.payload }
      default:
          return state;
  }
}
