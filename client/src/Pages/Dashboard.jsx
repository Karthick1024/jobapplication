import { Outlet } from "react-router-dom"
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSideBar } from "../assets/components"
import { createContext, useContext, useState } from "react"
import { checkdefaulttheme } from "../App"

const DashboardContext = createContext();




const Dashboard = () => {

  const user = {
    name: 'john'
  }

  const [showsidebar, setShowsidebar] = useState(false)

  const [darktheme, setDarktheme] = useState(checkdefaulttheme())

  const toggledarktheme = () => {
   const newdarktheme = !darktheme;
   setDarktheme(newdarktheme);
   document.body.classList.toggle('dark-theme', newdarktheme);
   localStorage.setItem('darktheme', newdarktheme);
  
 

  }

  const togglesidebar = () => {
    setShowsidebar(!showsidebar)
  }

  const logoutuser = async () => {
    console.log('User Logout');

  }

  return (
    <DashboardContext.Provider value={{
      user,
      showsidebar,
      darktheme,
      toggledarktheme,
      togglesidebar,
      logoutuser
    }}>
      <Wrapper>
      <main className='dashboard'>
          <SmallSideBar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
   

      </Wrapper>
    </DashboardContext.Provider>




  )
}
  ;

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
