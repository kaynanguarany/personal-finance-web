import React, { Component } from 'react';
import financeAPI from './FinanceAPI';

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

  render () {
    return (
      <div>
        {this.transactionList(this.props.data)}
      </div>
    )
  }
}

export default financeAPI('transactions')(Transactions); 