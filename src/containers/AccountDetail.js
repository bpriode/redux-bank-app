import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAccount, withdrawFunds }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';
import Transaction from './Transaction'


import Modal from 'react-modal';


const customStyles = {
  content : {
  top                   : '40%',
  left                  : '50%',
  right                 : 'auto',
  bottom                : 'auto',
  marginRight           : '-50%',
  transform             : 'translate(-50%, -50%)'
}
};

class AccountDetail extends Component {
  constructor(props){
  super(props)

      this.state= {isModalOpen: false};

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
      this.setState({isModalOpen: true})
    }

    closeModal(){
      this.setState({isModalOpen: false})
    }
  render() {
    let n=1
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
          <Modal
             isOpen={this.state.isModalOpen}
             onRequestClose={this.closeModal}
             closeTimeoutMS={n}
             shouldCloseOnOverlayClick={false}
             style={customStyles}
             contentLabel="Example Modal"
           >
           <Transaction closeModal={this.closeModal}/>
        </Modal>
        </div>
        <button className="btn btn-danger mt-4" onClick={this.openModal} >Withdraw</button>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
