import { React, useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoH.png";
import { FaAngleDown, FaBars, FaRegHeart, FaRegUser, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { SlHandbag, SlHeart } from "react-icons/sl";

export default function Navbar() {
  const [auth, setAuth] = useState();
  useEffect(() => {
    const user = localStorage.getItem("auth") || "";
    if (user)
      setAuth(user);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.classList.contains("logout-button") && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const logout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("auth");
    window.location.replace("/");
  };

  return (
    <nav className="bg-white  border-gray-200 px-10 md:px-0 py-5 md:py-2.5 rounded z-0">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/" className="flex ml-0 md:ml-40 items-center justify-center">
          <img src={logo} className="h-12" alt="Logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <FaBars aria-hidden="true" fill="currentColor" />
        </button>
        <div className="hidden  md:block w-auto" id="navbar-default">
          <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row space-x-0 md:space-x-8 md:mt-0 md:font-medium md:border-0 ">
            <li>
              <Link
                to="#"
                className="block text-[20px] py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block text-[20px] py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple md:p-0"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block text-[20px] py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="block text-[20px] py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple md:p-0"
              >
                About
              </Link>
            </li>
            <li className="pl-20 md:pl-1 ">
              <Link
                to=""
                className="flex text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple md:p-0"
              >
                <SlHeart /><span className="pl-1 text-lg mt-[-10px] font-light">0</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple md:p-0"
              >
                <SlHandbag /><span className="text-lg mt-[-10px] font-light">0</span>
              </Link>
            </li>
            { auth === undefined ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="py-2 px-5 rounded-3xl text-white bg-purple hover:bg-black hover:text-white transition duration-500 ease-in-out"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="py-[7px] px-5 rounded-3xl border-[1px] border-purple text-purple bg-white hover:text-white hover:bg-purple transition duration-500 ease-in-out"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
            <li>
              <button
                onClick={toggleDropdown}
                ref={dropdownRef}
                className="flex relative justify-center items-center text-[20px]  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple md:p-0"
              >
                <FaUserCircle className="mr-2 text-xl"/><p className="text-[17px] pt-[3px]">{auth}</p> <FaAngleDown className="pt-[3px]"/>
              </button>
              {isOpen && (
                <div className="absolute w-[120px] font-normal bg-slate-200 divide-y divide-gray-100 rounded-lg shadow ">
                  <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                    <li className="">
                      <Link to="" className="flex items-center px-4 py-2 hover:bg-gray-100  ">
                        <FaRegUser className="mr-1"/>
                        <p>Information</p>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={logout} className=" flex logout-button items-center px-4 py-2 hover:bg-gray-100 ">
                        <FiLogOut className="mr-1 logout-button"/>
                        <p className="logout-button">Logout</p>
                      </Link>
                    </li>
                  </ul>
                 
                </div>
              )}
            </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
