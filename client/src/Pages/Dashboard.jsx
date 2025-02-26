import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom"
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSideBar } from "../assets/components"
import { createContext, useContext, useState } from "react"
import { checkdefaulttheme } from "../App"
import customFetch from "../utils/customFetch"
import { toast } from "react-toastify"

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user')
    return data
  } catch (error) {
    return redirect('/')
  }
}
const DashboardContext = createContext();
const Dashboard = () => {
  const { user } = useLoaderData()
  const navigate = useNavigate()
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
    navigate('/')
    await customFetch.get('/auth/logout')
    toast.success("log ")
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
              <Outlet context={{ user }} />
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
