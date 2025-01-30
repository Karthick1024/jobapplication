import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import Logo from '../assets/components/Logo'
import { FormRow } from '../assets/components'

const Register = () => {
  return (
    <Wrapper>
    
        <form className='form' action="">
          <Logo />
        
        <h4>Register</h4>
        <FormRow type='text' name='name'/>
        <FormRow type='text' name='lastname'labelText='last name'/>
        <FormRow type='text' name='location'/>
        <FormRow type='password' name='password'/>

        <button type='submit' className="btn btn-block">
              submit
        </button>
        <p>
          Already a member?
          <Link to='/login'> Login</Link>
        </p>
        </form>
    </Wrapper>
  )
}

export default Register
