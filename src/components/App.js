import React, { useState } from 'react'
import "./css/main.css"
import { Alert, Button, Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import SignUp from './SignUp'
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory} from 'react-router-dom'
import Todolist from './ToDoList'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import PrivateRoute from './PrivateRoute'
import DisplayTodos from './DisplayTodos'
import SignIn from './SignIn'

function App() {
  return (
    <Container className='container'
      style={{minHeight: '100vh' }}
    >
      <AuthProvider>
        <div className='w-100' style={{maxWidth: '400px' }}>
        <h1>Todo App</h1>
          <Router>
            <nav>
              <ul style={{display: 'flex', listStyle: 'none'}}>
                {/* <li style={{marginRight: '10px'}}>
                  <NavLink exact to="/" activeStyle={{fontWeight: "bold", color: "red"}}>To Do List</NavLink>
                </li> */}
                <li style={{marginRight: '10px'}}>
                  <NavLink to="/signup" activeStyle={{fontWeight: "bold", color: "red"}}>Sign Up</NavLink>
                </li>
                <li style={{marginRight: '10px'}}>
                  <SignIn />
                </li>
                <li>
                </li>
              </ul>
            </nav>
              <Switch>
                <PrivateRoute exact path='/' component={Todolist} />
                <Route path='/signup' component={SignUp} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
              </Switch>
            <DisplayTodos />
          </Router>
        </div>
      </AuthProvider>
    </Container>

  )
}

export default App
