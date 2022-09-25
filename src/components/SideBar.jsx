import '../App.css';
import { useState } from "react";
import ArrowSolid from '../icons/arrowSolid';
//import dashboardIcon from '../assets/svg/dashboardIcon.svg'

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } bg-dark-grafana h-screen p-5  pt-4 relative border-r border-gray-200  border-opacity-10 duration-300`} 
      >
        <div className={`absolute cursor-pointer -right-3 top-16 w-7 border-slate-300 
           border-1 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}>
           <ArrowSolid color="#181b1f" />
        </div>
       
        <div className="flex gap-x-4 items-center">
          <img
            src={require('../assets/logo.png')} alt='logo'
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            AUI TECHNO
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={require(`../assets/${Menu.src}.png`)}  alt={Menu.src}/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>     
    </div>
  );
};
export default SideBar;

