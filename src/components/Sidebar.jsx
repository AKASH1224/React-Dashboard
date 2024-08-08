import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import {useStateContext}  from '../context/ContextProvider';
const Sidebar = () => {
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black hover:bg-light-gray m-2';
  const {activeMenu,setActiveMenu,ScreenSize,currentColor } =useStateContext();
  const handleCloseSideBar=()=>{
    if (activeMenu && ScreenSize <=900) {
      setActiveMenu(false)
      
    } 
  } 
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-black"
            >
              <SiShopware /> <span>SHoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                onClick={() => setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
                className="text-xl p-2 hover:bg-light-gray rounded-full"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {/* Looping through the links */}
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style ={({isActive}) =>({backgroundColor: isActive ? currentColor:''})}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
