import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useDashboardContext } from '../../Pages/Dashboard'
import Wrapper from '../wrappers/ThemeToggle'

const Themetoggle = () => {


    const { darktheme, toggledarktheme } = useDashboardContext()

    return (
        <Wrapper onClick={toggledarktheme}>
            {darktheme ? (<BsFillSunFill className='toggle-icon' />) : (<BsFillMoonFill />)}
        </Wrapper>
    )
}

export default Themetoggle
