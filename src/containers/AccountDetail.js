import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAccount }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';


class AccountDetail extends Component {
  render() {
    console.log('props', this.props);
  return(
    <div className="col-md-3">
      <div className= "card">
        <div className= "card-block">
          <h4 className= "card-title">Account Information</h4>
          <h6 className= "card-subtitle mb-2 text-muted">{this.props.account.accountType} account for {this.props.user.name}</h6>
          <div className= "card-text mb-4">
            <div>Balance: {this.props.account.balance}</div>
          </div>
          <h6 className='card-subtitle mb-1 text-muted'> Withdraw Amount Below</h6>
          <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary m-2">$5</button>
              <button type="button" className="btn btn-success m-2">$10</button>
              <button type="button" className="btn btn-info m-2">$20</button>
              <button type="button" className="btn btn-danger m-2">Cancel</button>
          </div>
        </div>
        <Link className="btn btn-primary mt-4" to="/users/:id" >Back to Accounts</Link>
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

export default connect(mapStateToProps)(AccountDetail);
