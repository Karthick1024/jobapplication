import { useDashboardContext } from "../../Pages/Dashboard"
import links from "../../utils/Links"
import { NavLink } from "react-router-dom"

const Navlinks = (isBigSidebar) => {
    const { togglesidebar, user } = useDashboardContext()

    return (

        <div className="nav-links">
            {links.map((link) => {
                const { text, path, icon } = link
                return (<NavLink to={path} key={text} className='nav-link' onClick={isBigSidebar ? null : togglesidebar} end>
                    <span className='icon'>
                        {icon}
                    </span>
                    {text}</NavLink>)
            })}
        </div>

    )
}

export default Navlinks
