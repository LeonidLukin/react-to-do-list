import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Card, FormLabel, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Не удалось войти')
        }
        setLoading(false)
    }
 
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <FormLabel>Email</FormLabel>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <FormLabel>Password</FormLabel>
                        <Form.Control type='password' ref={passwordRef} required/>
                    </Form.Group>
                    
                    <Button disabled={loading} className='mt-4 w-100' type='submit'>
                        Log In
                    </Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to='/forgot-password'>Забыли пароль?</Link>
                </div>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Need an account? <Link to='/signup'>Sign Up</Link>
        </div>
        </>
    )
}
