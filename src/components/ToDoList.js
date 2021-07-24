import React, { useState } from 'react'

const ToDoList = () => {

    const [todo, setTodo] = useState('')
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    // console.log('todo text', todo);

    return (
        <div className='addTodos'>
        <input 
            type='text' 
            onChange={(e) => handleChange(e)} 
            className='todo.input'
        />

        <button className='add-btn'>Add</button>
        </div>
    )
}

export default ToDoList



// import React, { useState } from 'react'
// import { Button, Card, Alert } from 'react-bootstrap'
// import { useAuth  } from '../contexts/AuthContext'
// import { Link,useHistory } from 'react-router-dom'

// export default function Todolist() {
//     const [error, setError] = useState('')
//     const { currentUser, logout } = useAuth()
//     const history = useHistory()

//     async function handleLogout() {
//         setError('')

//         try {
//             await logout()
//             history.push('/login')
//         } catch {
//             setError('Не удалось выйти')
//         }
//     }

//     return (
//         <>
//             {/* <Card>
//                 <Card.Body>
//                     <h2 className='text-center md-4'>Profile</h2>
//                     {error && <Alert variant='danger'>{error}</Alert>}
//                     <strong>Email:</strong>{currentUser.email}
//                     <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
//                         Update Profile
//                     </Link>
//                 </Card.Body>
//             </Card>
//             <div className='w-100 text-center mt-2'>
//                 <Button variant='lonk' onClick={handleLogout}>Log Out</Button>
//             </div> */}
//         </>
//     )
// }