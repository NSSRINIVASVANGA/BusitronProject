import {Component} from 'react'
import './index.css'

class Dashbord extends Component {
  state = {accountbalance: 0, getMoney: 0}

  changeMoney = event => {
    this.setState({getMoney: event.target.value})
  }

  changeBalance = () => {
    const {accountbalance, getMoney} = this.state
    accountbalance -= parseInt(getMoney)
    this.setState({accountbalance: accountbalance})
  }

  render() {
    const {accountbalance,getMoney} = this.state
    return (
      <div className="dashbord-con">
        <div className="mny-con">
          <h1 className="heading"> Current Balance : {accountbalance} </h1>
          <input
            type="text"
            value = {getmoney}
            onChange={this.changeMoney}
            placeholder="Enter Amount"
            className="input-el"
          />
          <button onClick={this.changeBalance} className="btn">
            {' '}
            Deposit{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default Dashbord
