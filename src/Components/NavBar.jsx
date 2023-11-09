import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }




    const NavLinks = <>
        <li className="text-lg font-semibold"><NavLink style={({ isActive }) => {
            return {
                color: isActive ? "#1E2C1A" : "white",
                backgroundColor: isActive ? "#D49B35" : "",

            };
        }} to="/">Home</NavLink></li>
        <li className="text-lg font-semibold"><NavLink style={({ isActive }) => {
            return {
                color: isActive ? "#1E2C1A" : "white",
                backgroundColor: isActive ? "#D49B35" : "",

            };
        }} to="/rooms">Rooms</NavLink></li>
        <li className="text-lg font-semibold"><NavLink style={({ isActive }) => {
            return {
                color: isActive ? "#1E2C1A" : "white",
                backgroundColor: isActive ? "#D49B35" : "",

            };
        }} to="/myBookings">My Bookings</NavLink></li>
        {
            user ?
                <div className="flex flex-col lg:flex-row gap-1">

                    <button onClick={handleSignOut} className="text-lg font-semibold text-[#D49B35] border-[#D49B35] btn bg-[#1E2C1A]">Sign Out</button>
                </div>
                :
                <button className="text-lg font-semibold text-[#D49B35] border-[#D49B35] btn bg-[#1E2C1A] "><Link to="/login">Login</Link></button>
        }

    </>
    return (
        <div className="navbar lg:w-11/12 lg:mx-auto lg:rounded-lg bg-[#1E2C1A]  lg:my-4 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 text-[#D49B35] w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-lg dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <div className="flex items-center px-4">
                    <img className="w-20 h-15" src="https://i.ibb.co/R36SZtG/Sv-removebg-preview.png" alt="" />
                    <h1 className="text-[#D49B35] font-bold text-2xl">SuiteVoyage</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ?
                    <div className="items-center text-center hidden lg:flex">
                        <img className="w-1/2 h-1/2 rounded-2xl" src={user?.photoURL} alt="" />
                        <h2 className="text-lg text-[#D49B35]">{user?.displayName}</h2>
                    </div>
                      :
                    <div></div>
                    
                }
            </div>
        </div>
    );
};

export default NavBar;