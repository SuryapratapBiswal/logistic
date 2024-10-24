import React from 'react'
import { IoMenu } from "react-icons/io5";
const Sidebar = () => {
    return (
        <>
            <div className="bg-white h-[100vh] px-4 py-4 shadow-2xl">
                <div className="flex justify-between items-center mb-5">
                    <p className="text-2xl font-extrabold">logo</p>
                    <IoMenu size={24} />
                </div>
                <ul>
                    <li className="hover-effect">Users</li>
                    <li className="hover-effect">Orders</li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar