import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAccounts } from '../actions/FinanceActions'

class Accounts extends Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  accountItem(props) {
    return(
      <tr>
        <td>{props.value.name}</td>
        <td>{props.value.current_balance}</td>
      </tr>
    )
  }

  listAccounts() {
    const itens = this.props.accounts.map((a) => 
      <this.accountItem key={a.id} value={a} />
    )
    console.log(itens)
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
    console.log("dentro do render");
    console.log(this.props.accounts);
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        {this.listAccounts()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { accounts, hasErrored, isLoading } = state.accounts;
  return { accounts, hasErrored, isLoading }
}

const mapFunctionsToProps = {
  fetchAccounts
};

export default connect(mapStateToProps, mapFunctionsToProps )(Accounts);
