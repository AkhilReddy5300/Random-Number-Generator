import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChange = () => {
    const {count} = this.state
    const random = Math.ceil(Math.random() * 100)
    this.setState({count: random})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-cont">
        <div className="card">
          <h1 className="header">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onChange}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
