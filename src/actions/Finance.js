import { isLoading, fetchDataSuccess, errored } from './FinanceActions'

const rootURL = 'https://599ea6f0d3276800116b9d06.mockapi.io/'

export function fetchFinanceData(query, dispatch) {
  console.log(dispatch)
  console.log('fetchdata')
  dispatch(isLoading(true))

  fetch(rootURL+query)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching data...')
      }

      dispatch(isLoading(false))
      console.log(rootURL+query, response)
      return response.json();
    })
    .then(data => dispatch(fetchDataSuccess(data)))
    .catch(error => {
      dispatch(isLoading(false))
      dispatch(errored(true))
    }) //TODO: pass error msg    
}
