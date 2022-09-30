import {Component} from 'react'
import {v4} from 'uuid'
import Passwords from '../Passwords/index'
import './index.css'

class PasswordManager extends Component {
  state = {
    searchInput: '',
    website: '',
    username: '',
    password: '',
    passwordList: [],
    isClicked: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newUserDetails = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newUserDetails],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  onDeletingPassword = id => {
    const {passwordList} = this.state
    const filteredPasswordsList = passwordList.filter(
      eachDetail => eachDetail.id !== id,
    )
    this.setState({passwordList: filteredPasswordsList})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {passwordList, searchInput, isClicked} = this.state

    const filteredPasswordList = passwordList.filter(eachDetail =>
      eachDetail.website.toLowerCase().includes(searchInput),
    )
    let imgUrl
    if (passwordList.length === 0) {
      imgUrl = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-password"
        />
      )
    }

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="user-container">
          <div className="user-inputs">
            <form className="flex-user-container" onSubmit={this.onSubmitForm}>
              <h1 className="main-heading">Add New Password</h1>
              <div className="input-elements-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-logo"
                />
                <hr />
                <input
                  type="text"
                  className="input-elements"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-elements-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-logo"
                />
                <hr />
                <input
                  type="text"
                  className="input-elements"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-elements-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-logo"
                />
                <hr />
                <input
                  type="password"
                  className="input-elements"
                  placeholder=" Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="user-input-logo"
            />
          </div>
        </div>
        <div className="second-container">
          <div className="sc-top">
            <h1 className="sc-heading">Your Password</h1>
            <span className="span-element"> {passwordList.length}</span>
            <div className="sc-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-logo"
              />
              <hr />
              <input
                type="search"
                placeholder="Search"
                className="input-elements"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr />
          <div className="show-passwords-container">
            <input
              type="checkbox"
              className="checkbox-element"
              onChange={this.onChangeCheckBox}
              id="checkbox"
            />
            <label htmlFor="checkbox" className="passwords-para">
              Show Passwords
            </label>
          </div>
          <ul className="password-component">
            {filteredPasswordList.map(eachDetail => (
              <Passwords
                isClicked={isClicked}
                onDeletingPassword={this.onDeletingPassword}
                passwordList={eachDetail}
                key={eachDetail.id}
              />
            ))}
          </ul>
          <div className="no-pass-container">
            {imgUrl}
            <p>No Passwords</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
