import React, { Component } from 'react';
import Card from './components/Card'
import Accounts from './components/Accounts'
import Transactions from './components/Transactions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Card title="Accounts">
            <Accounts />
          </Card>
          <Card title="Transactions">
            <Transactions />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
