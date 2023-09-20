import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex ">
            <div className="w-[25%] bg-gray-200 ">
                <ul>
                    <li> <NavLink to='/dashboard'>Dashboard</NavLink> </li>
                    <li> <NavLink to='/dashboard/profile'>Profile</NavLink> </li>
                    <li> <NavLink to='/dashboard/editProfile'>EditProfile</NavLink> </li>
                </ul>
            </div>

            <div className="w-[70%]">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;