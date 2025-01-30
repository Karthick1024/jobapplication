import Wrapper from "../wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from './Logo';
import { useDashboardContext } from '../../Pages/Dashboard';
import Logoutcontainer from "./Logoutcontainer";
import Themetoggle from "./Themetoggle";

const Navbar = () => {

    const { togglesidebar } = useDashboardContext()

    return (
        <Wrapper>
            <div className="nav-center">
                <button type='button' className="toggle-btn" onClick={togglesidebar}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h4 className="logo-text">Dashboard</h4>
                </div>

                <div className="btn-container">
                    <Themetoggle/>
                  <Logoutcontainer/>
                </div>
            </div>

        </Wrapper>


    )
};

export default Navbar
