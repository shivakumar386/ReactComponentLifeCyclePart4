import './index.css'

const Passwords = props => {
  const {passwordList, onDeletingPassword, isClicked} = props
  const {website, username, password, id} = passwordList

  const onDeleteDetail = () => {
    onDeletingPassword(id)
  }

  const imgSrc = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  const passwordClicked = isClicked ? (
    <div>
      <p className="detail">{password}</p>
      <p className="detail">password provided</p>
    </div>
  ) : (
    imgSrc
  )

  return (
    <li className="passwords-container-elements">
      <p className="initial-letter">S</p>
      <div className="user-details">
        <p className="detail">{website}</p>
        <p className="detail">{username}</p>
        {passwordClicked}
      </div>
      <button
        type="button"
        className="delete-button-icon"
        onClick={onDeleteDetail}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-logo"
          onClick={onDeleteDetail}
        />
      </button>
    </li>
  )
}

export default Passwords
