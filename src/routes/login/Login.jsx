import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { apiInstance } from '../../api/api'

const Login = () => {


  const emailInp = useRef()
  const passwordInp = useRef()
  const handleForm = (e)=>{
    e.preventDefault()
    try {
      apiInstance.post("auth/login", {
        "email": emailInp.current.value,
        "password": passwordInp.current.value
      }
      )
      .then(response => {
        console.log(response);
        console.log(atob("eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ"));
      })
      .catch(error=>console.log(error))
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div><Link to="/">Go Home</Link>
      <form onSubmit={handleForm}>
        <input type="email" placeholder='Your email' ref={emailInp}/>
        <input type="password" placeholder='Your Password' ref={passwordInp}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login