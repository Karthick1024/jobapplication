import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {

  const error  = useRouteError()
  console.log(error);


  if(error.status === 404){
      return <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page Not Found</h3>
          <p>We cannot seem to find the page you were looking for</p>
          <Link to='/'>Back to Home</Link>
        </div>
      </Wrapper>
  }
  
  
  return (
    <Wrapper>
    <div>
      <h3>Something Went Wrong! Error</h3>
      
    </div>
    </Wrapper>
  )
}

export default Error
