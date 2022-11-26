import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button onClick={onClickLogout} className="logout-button" type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
