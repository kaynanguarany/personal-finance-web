import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchFinanceData } from '../actions/Finance'

class Transactions extends Component {

  transactionItem(props) {
    return(
      <tr>
        <td>{props.value.date}</td>
        <td>{props.value.description}</td>
        <td>{props.value.kind.description}</td>
        <td>{props.value.category.name}</td>
        <td>{props.value.value}</td>
      </tr>
    )
  }

  transactionList(data) {
    const itens = data.map((a) => 
      <this.transactionItem key={a.id} value={a} />
    )
    return (
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Goal</th>
          <th>Category</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {itens}
      </tbody>
    </table>
    )
  }

  componentDidMount() {
    // this.props.fetchData('transactions')
  }

  render () {
    // if (this.props.hasErrored) {
    //   return <p>Sorry! There was an error loading the items</p>;
    // }
    // if (this.props.isLoading) {
    //   return <p>Loading…</p>;
    // }
    return ( <p> Transactions </p>)
    // return (
    //   <div>
    //     {this.transactionList(this.props.transactions)}
    //   </div>
    // )
  }
}


const mapStateToProps = (state) => {
  // const { transactions, hasErrored, isLoading } = state;
  // return { transactions, hasErrored, isLoading }
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchFinanceData(url))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);