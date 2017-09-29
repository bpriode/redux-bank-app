import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withdrawFunds }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';


class Transaction extends Component {
  render() {
    console.log('props', this.props);
  return(
    <div className="d-flex justify-content-center">
    <div className="col-md-9 text-center">
      <h4 className= "card-title">Withdraw Funds</h4>
          <h6 className= "card-subtitle mb-2 text-muted">{this.props.account.accountType} account for {this.props.user.name}</h6>
    <div className= "card-text mb-4">
      <div>You Current Balance: {this.props.account.balance}</div>
    </div>
    <p>Select The Amount You Want To Withdraw: </p>
    <div className="btn-group" role="group">
        <button onClick={() => this.props.withdrawFunds(5)} type="button" className="btn btn-primary m-2">$5</button>
        <button onClick={() => this.props.withdrawFunds(10)} type="button" className="btn btn-success m-2">$10</button>
        <button onClick={() => this.props.withdrawFunds(20)} type="button" className="btn btn-info m-2">$20</button>
    </div>
    <button className="btn btn-primary" onClick={this.props.closeModal}>Back to Account</button>
    </div>
    </div>
    )
  }
}


function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);
  return {
    account: state.users[userIdx].accounts[accountIdx],
    user: state.users[userIdx]
  };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);
