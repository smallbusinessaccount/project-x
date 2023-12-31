// import React from "react";
import { useState } from 'react'
import sidebarData from '../data/SidebarData.json'
import { BiSolidDashboard, BiHelpCircle } from "react-icons/bi"
import { RiOrganizationChart } from "react-icons/ri"
import { FaUsers } from "react-icons/fa"
import { AiFillIdcard } from "react-icons/ai"
import { FiSettings, FiLogOut } from "react-icons/fi"
import { useNavigate } from 'react-router-dom';

const FaIconDynamic = ({ type }) => {
  const FaIcon = components[type];
  return <FaIcon></FaIcon>;
};

const components = {
  BiSolidDashboard,
  BiHelpCircle,
  RiOrganizationChart,
  FaUsers,
  AiFillIdcard,
  FiSettings,
  FiLogOut
};


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(false);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const handleClick = (path) => {
    openSidebar();
    handleNavigate(path)

  }

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Burger Button */}
      <button onClick={toggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-16 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button >

      {/* Sidebar */}

      <aside id="default-sidebar" className={`fixed top-14 left-0 z-40 w-56 h-screen transition-transform ${isOpen ? '' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-200 ">
          <ul className="space-y-2 font-medium">
            {sidebarData.map(sidebarItem => (
              <li key={sidebarItem.id}>
                <a href="#" onClick={() => handleClick(sidebarItem.name)} className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                  <FaIconDynamic type={sidebarItem.icon} />
                  <span className="ml-3">{sidebarItem.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside >

    </>
  )
}

