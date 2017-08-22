import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// import financeAPI from './FinanceAPI';
import { loadList } from '../actions/financeActions';

class Accounts extends Component {

  componentWillMount() {
    this.props.loadList();
  }

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
    if (_.isNull(this.props.list)) {
      return (<div>loading...</div>)
    }

    return (
      <div>
        {this.accountList(this.props.list)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { list } = state.finance;

  return { list };
};

export default connect(mapStateToProps, { loadList })(Accounts);
