"use client";

import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { FaRegUser, FaAngleRight, FaAngleDown } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import Link from 'next/link';
import { Grid2X2Icon } from 'lucide-react';

const menuItems = [
    {
        label: "Dashboard",
        icon: <Grid2X2Icon />,
        path: "/dashboard", // Adding a path for Dashboard
    },
    {
        label: "Users",
        icon: <FaRegUser />,
        subItems: [
            { label: "Add User", path: "/users/add" },
            { label: "User List", path: "/users" }
        ]
    },
    {
        label: "Orders",
        icon: <FiBox />,
        subItems: [
            { label: "Order List", path: "/orders" },
        ]
    }
];

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [collapsed, setCollapsed] = useState(false);
    const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);

    const handleMenuClick = (index: number) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const handleSubItemClick = (label: string) => {
        setSelectedSubItem(label);
    };

    return (
        <div className={`bg-gradient h-full px-4 py-4 shadow-2xl text-white transition-all duration-500 ${collapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex justify-between items-center mb-5 cursor-pointer" onClick={toggleSidebar}>
                <p className={`text-2xl lilita-one-regular ${collapsed ? 'hidden' : ''}`}>SB-Logistics</p>
                <IoMenu size={24} />
            </div>
            <ul>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`hover-effect ${openMenu === index ? 'bg-[#9333EA]' : ''} rounded-lg`}
                    >
                        {item.subItems ? (
                            // If item has subItems, render as collapsible menu
                            <div
                                className="flex justify-between items-center cursor-pointer px-2 rounded-lg"
                                onClick={() => handleMenuClick(index)}
                            >
                                <div className="flex gap-2 items-center">
                                    {item.icon}
                                    {!collapsed && (
                                        <li className={`${openMenu === index ? 'font-bold text-white' : ''}`}>
                                            {item.label}
                                        </li>
                                    )}
                                </div>
                                {!collapsed && (openMenu === index ? <FaAngleDown /> : <FaAngleRight />)}
                            </div>
                        ) : (
                            // If no subItems, render as a direct link
                            <Link href={item.path} className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-[#9333EA]">
                                {item.icon}
                                {!collapsed && <li>{item.label}</li>}
                            </Link>
                        )}
                        {/* Dropdown items with transition */}
                        {!collapsed && item.subItems && (
                            <ul
                                className={`ml-6 mt-2 overflow-hidden transition-all duration-500 ease-in-out ${openMenu === index ? 'max-h-40' : 'max-h-0'}`}
                            >
                                {item.subItems.map((subItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className={`py-1 cursor-pointer hover:text-white ${selectedSubItem === subItem.label ? 'bg-[#372dfdd4] px-2 rounded-md text-white' : 'text-gray-200'}`}
                                        onClick={() => handleSubItemClick(subItem.label)}
                                    >
                                        <Link href={subItem.path} className="flex items-center">
                                            {subItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
