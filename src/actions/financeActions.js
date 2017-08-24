import types from './Types';
import { fetchFinanceData } from './Finance';

export function errored(value) {
  return {
    type: types.ERRORED,
    payload: value
  };
}

export function isLoading(value) {
  return {
    type: types.FETCHING_DATA,
    payload: value
  };
}

export function fetchDataSuccess(data = []) {
  console.log('fetch success')
  return {
    type: types.ACCOUNTS,
    payload: data
  }
}

export const fetchAccounts = () => {
  console.log('fetchAccounts')
  return (dispatch) => {
    fetchFinanceData('accounts', dispatch)
  }
}