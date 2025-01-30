import React from 'react'
import Wrapper from '../wrappers/BigSidebar'
import { useDashboardContext } from '../../Pages/Dashboard'
import Logo from './Logo'
import Navlinks from './Navlinks'


const BigSidebar = () => {


  const {showsidebar} = useDashboardContext()

  return (
   <Wrapper>
    <div className={showsidebar ? "sidebar-container" : "sidebar-container show-sidebar"}>
      <div className="content">
        <header>
          <Logo/>
        </header>
        <Navlinks isBigSidebar/>
      </div>
    </div>
   </Wrapper>
  )
}

export default BigSidebar
