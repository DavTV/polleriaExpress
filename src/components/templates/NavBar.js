import {NavLink } from "react-router-dom";

const NavBar = ({menu,changeButton}) => {
    return ( 
        <div className={menu ?  'navbar bg-danger open border-0' : 'navbar bg-danger border-0' } >
            <nav className="w-100">
                <ul  className="fw-bold ">
                    <li className="p-2">
                        <NavLink to="/"   activeClassName="active" className="text-white text-navbar" onClick={changeButton} >Home</NavLink>
                    </li>                    
                  
                    <li className="p-2">
                    <NavLink to="/reservacion"  activeClassName="active"  className="text-white text-navbar" onClick={changeButton} >Reservas</NavLink>
                    </li>
                   
                    <NavLink to="/orden/:name/:description"  activeClassName="active"  className="text-white text-navbar"></NavLink>
                    
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;
