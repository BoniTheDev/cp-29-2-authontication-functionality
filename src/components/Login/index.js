// Write your JS code here

import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 20})

    history.replace('/')
  }

  onLoginSubmit = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <h1>Please Login</h1>
        <form className="button-container" onSubmit={this.onLoginSubmit}>
          <button type="submit">Login with sample creds</button>
        </form>
      </div>
    )
  }
}

export default Login
