import React, { Component } from 'react';

const rootURL = 'http://localhost:3001/'

const financeAPI = (query) => (Comp) =>
  class FinanceAPI extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      console.log(query);
      this.setState({ isLoading: true });
      fetch(rootURL+query)
        .then(response => {
          if (response.ok) {
            console.log(rootURL+query, response)
            return response.json();
          } else {
            throw new Error('Error fetching data...');
          }
        })
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      const { isLoading, error, data } = this.state;
      if (isLoading) {
        return <p>Loading...</p>
      } 
      if (error !== null) {
        return (
          <div className="alert alert-danger" role="alert">
            Error fetching data: {error.toString()}
          </div>
        )
      } 
      if (data.length === 0) {
        return <p>No data to display</p>
      }
      return <Comp { ...this.props } { ...this.state } />
    }
  }

  export default financeAPI;