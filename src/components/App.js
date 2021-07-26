import React from 'react'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import SignUp from './SignUp'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Todolist from './ToDoList'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import PrivateRoute from './PrivateRoute'
import DisplayTodos from './DisplayTodos'

function App() {
  return (
    <Container className='d-flex align-items-center 
      justify-content-center'
      style={{minHeight: '100vh' }}
    >
      <div className='w-100' style={{maxWidth: '400px' }}>
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
                <NavLink to="/login" activeStyle={{fontWeight: "bold", color: "red"}}>Log In</NavLink>
              </li>
            </ul>
          </nav>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Todolist} />
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
          </AuthProvider>
          <DisplayTodos />
        </Router>
        <DisplayTodos />

      </div>
    </Container>
  )
}

export default App
