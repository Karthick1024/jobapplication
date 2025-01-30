
import { FaTimes } from 'react-icons/fa';
import { useDashboardContext } from '../../Pages/Dashboard';
import Wrapper from '../wrappers/SmallSidebar'
import Logo from './Logo';
import Navlinks from './Navlinks';


const SmallSideBar = () => {

  const { showsidebar, togglesidebar } = useDashboardContext();


  return (
    <Wrapper>
      <div className={showsidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
          <button type='button' className="close-btn" onClick={togglesidebar}><FaTimes /></button>
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSideBar
