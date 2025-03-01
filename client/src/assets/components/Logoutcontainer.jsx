import React, { useState } from 'react'
import Wrapper from '../wrappers/LogoutContainer'
import { useDashboardContext } from '../../Pages/Dashboard'
import { FaCaretDown, FaUserCircle } from 'react-icons/fa'

const Logoutcontainer = () => {

    const [showlogout, setShowlogout] = useState(false)

    const { user, logoutuser } = useDashboardContext()

    return (
        <Wrapper>
            <button type='button' className="btn logout-btn" onClick={() => { setShowlogout(!showlogout) }}>
                {user.avatar ? <img src={user.avatar} alt='avatar' className='img' /> : <FaUserCircle />}

                {user?.name}
                <FaCaretDown />
            </button>
            <div className={showlogout ? "dropdown show-dropdown" : "dropdown"}>
                <button type='button' className='dropdown-btn' onClick={logoutuser}>
                    Logout
                </button>
            </div>
        </Wrapper>
    )
}

export default Logoutcontainer
