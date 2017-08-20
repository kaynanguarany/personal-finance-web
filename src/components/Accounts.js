import React, { Component } from 'react';
import financeAPI from './FinanceAPI';

class Accounts extends Component {

  accountItem(props) {
    return(
      <tr>
        <td>{props.value.name}</td>
        <td>{props.value.initial_balance}</td>
      </tr>
    )
  }

  accountList(data) {
    const itens = data.map((a) => 
      <this.accountItem key={a.id} value={a} />
    )
    return (
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Account</th>
          <th>Current Balance</th>
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
        {this.accountList(this.props.data)}
      </div>
    )
  }
}

export default financeAPI('accounts')(Accounts); 