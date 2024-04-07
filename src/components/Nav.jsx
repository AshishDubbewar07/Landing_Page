import React, { useState } from "react";
import { IoIosMenu, IoMdCloseCircle } from "react-icons/io";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="flex justify-evenly bg-blue-400 px-4 mx-auto align-middle items-center py-7">
        <h3 className="text-3xl font-bold">WsCube Tech</h3>
        {toggle ? (
          <IoMdCloseCircle
            onClick={() => setToggle(!toggle)}
            className="text-3xl text-white md:hidden block"
          />
        ) : (
          <IoIosMenu
            onClick={() => setToggle(!toggle)}
            className="text-3xl text-white md:hidden block"
          />
        )}
        <ul className=" hidden md:flex gap-10 text-white align-middle">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className={` duration-500 md:hidden gap-10 fixed bg-black text-white align-middle  top-[92px] w-full h-full 
        ${toggle ? 'left-[0%]' :'left-[-100%]'}`}>
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
