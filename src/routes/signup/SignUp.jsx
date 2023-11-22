import React, { useEffect, useRef } from 'react'
import { apiInstance } from '../../api/api'



const SignUp = () => {
  const nameInp = useRef("")
  const emailInp = useRef("")
  const passwordInp = useRef("")
  const avatarInp = useRef("")


  const handleForm = (e) => {
    e.preventDefault()
      try {
        apiInstance.post(`/users/`, {
            name : nameInp.current.value,
            email : emailInp.current.value,
            password : passwordInp.current.value,
            avatar : avatarInp.current.value,
        })
          .then(response => console.log(response))
      } catch (error) {
        console.log(error);
      }
  }


  return (
    <form onSubmit={handleForm}>
      <input type="text" placeholder='Your name' ref={nameInp}/>
      <input type="email" placeholder='Your email' ref={emailInp}/>
      <input type="password" placeholder='Your Password' ref={passwordInp}/>
      <input type="url" placeholder='Your avatar' ref={avatarInp}/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default SignUp