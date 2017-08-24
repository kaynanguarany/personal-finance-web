import types from './Types';
import { fetchFinanceData } from './Finance';


export const errored = (dispatch, value) => {
  dispatch({
    type: types.ERRORED,
    payload: value
  });
};


export const isLoading = (dispatch, value) => {
  dispatch({
    type: types.FETCHING_DATA,
    payload: value
  });
}



export const fetchDataSuccess = (dispatch, data = []) => {
  console.log('fetch success');
  console.log(data);
  dispatch({
    type: types.ACCOUNTS,
    payload: data
  });
}

export const fetchAccounts = () => {
  console.log('fetchAccounts')
  return async (dispatch) => {
    fetchFinanceData('accounts', dispatch)
  }
}