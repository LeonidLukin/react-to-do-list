import React from 'react'
import '../css/main.css'
import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'
import SignUp from './SignUp'
import Todolist from './ToDoList'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import PrivateRoute from './PrivateRoute'
import SignIn from './SignIn'
// import { motion } from 'framer-motion'

function App() {
  return (
    <Container className="container" style={{ minHeight: '100vh' }}>
      <AuthProvider>
        <div className="" style={{ maxWidth: '1000px' }}>
          <h1>Todo App</h1>
          <Router>
            <nav>
              <ul>
                <li style={{ marginRight: '10px' }}>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li style={{ marginRight: '10px' }}>
                  <SignIn />
                </li>
              </ul>
            </nav>
            <Switch>
              <PrivateRoute exact path="/" component={Todolist} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    </Container>
  )
}

export default App
