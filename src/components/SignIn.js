/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import '../css/main.css'

const SignIn = () => {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch (e) {
      setError(`Не удалось выйти, ${e}`)
    }
  }
  return (
    <div>
      {error && <p>{error}</p>}
      {currentUser ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <a className="link" role="button" tabIndex="0" onClick={handleLogout}>
          Log Out
        </a>
      ) : (
        <NavLink to="/login">Log In</NavLink>
      )}
    </div>
  )
}

export default SignIn
