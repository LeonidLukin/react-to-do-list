import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth } from '../contexts/AuthContext'

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    ></Route>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
}

export default PrivateRoute
