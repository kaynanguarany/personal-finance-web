import { isLoading, fetchDataSuccess, errored } from './FinanceActions'
import axios from 'axios';

const rootURL = 'https://599ea6f0d3276800116b9d06.mockapi.io/'

export async function fetchFinanceData(query, dispatch) {
  isLoading(dispatch, true);

  try {
    const response = await axios.get(rootURL+query);
    isLoading(dispatch, false);
    fetchDataSuccess(dispatch, response.data);    
    return response;

  } catch(error) {
    isLoading(dispatch, false);
    errored(dispatch, true);
  }
}
