import { 
  LIST_LOADED
} from '../actions/types';

const INITIAL_STATE = { 
  list: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_LOADED:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
