import { Link, Form, redirect, useNavigation,useActionData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import Logo from '../assets/components/Logo'
import { FormRow } from '../assets/components'
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const errors = { msg: '' }
  if (data.password.length < 3) {
    errors.msg = 'password is too short'
    return errors
  }
  try {
    await customFetch.post('/auth/login', data)
    toast.success("login successfull")
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }

}

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  const errors = useActionData()
  return (
    <Wrapper>
      <Form method='post' className="form">
        <Logo />
        <h4>Login</h4>
        {errors?.msg && <p style={{color:'red'}}>{errors.msg}</p>}
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <button type='submit' className="btn btn-block">
          Submit
        </button>
        <button type='button' className="btn btn-block" disabled={isSubmitting ? 'submitting' : 'submit'}>
          Explore the App
        </button>
        <p>
          New member?
          <Link to='/register'> Register</Link>
        </p>


      </Form>
    </Wrapper>
  )
}

export default Login
