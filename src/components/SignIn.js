import React, {useState} from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Button } from 'react-bootstrap'

const SignIn = () => {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
    
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Не удалось выйти')
        }
    }
console.log(currentUser)
    return (
        <div>
            {currentUser
            ? <Button variant='lonk' onClick={handleLogout}>Log Out</Button> 
            : <NavLink to="/login" activeStyle={{fontWeight: "bold", color: "red"}}>Log In</NavLink>
            }
        </div>
    )
}

export default SignIn
