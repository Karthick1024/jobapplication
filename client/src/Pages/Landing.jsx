

import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'

import { Link } from 'react-router-dom'
import Logo from '../assets/components/Logo'

const Landing = () => {
  return (
    <Wrapper>

      <nav>
        <Logo/>
      </nav>
      <div className="container page">
      <div className="info">
        <h1>Job <span>Tracking</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam esse recusandae placeat maxime fuga assumenda cupiditate possimus. Optio eos minima quasi, alias ab possimus nobis nostrum aperiam labore quod similique officia sunt. Modi, consequuntur. Repellendus expedita fugit, fuga fugiat ut id? Consectetur qui nihil fuga aspernatur enim impedit ipsum.
        </p>
        <Link to='/register' className='btn register-link'>Register</Link>
        <Link to='/login' className='btn'>Login / Demo User</Link>
      </div>
      <img src={main} alt="main" className='img main-img' />
      </div>

    </Wrapper>
  )
}




export default Landing
