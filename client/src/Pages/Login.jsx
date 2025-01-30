import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import Logo from '../assets/components/Logo'
import { FormRow } from '../assets/components'

const Login = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <button type='submit' className="btn btn-block">
          Submit
        </button>
        <button type='button' className="btn btn-block">
          Explore the App
        </button>
        <p>
          New member?
          <Link to='/register'> Register</Link>
        </p>


      </form>
    </Wrapper>
  )
}

export default Login
