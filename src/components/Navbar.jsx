import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "contact us", link: "/contact" },
];




export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = true;

  const navLinkStyle =
    "capitalize hover:underline cursor-pointer hover:text-primary";

  return (
    <div className=" container gap-40 navbar h-28  bg-[#ffffff]  shadow-sm  flex justify-around items-center">
        
    <h1 className=" font-bold text-2xl">
    Exclusive    
    </h1>    

{/* Desktop Navbar */}
<ul className="hidden md:flex gap-3">
        {links.map((item, i) => (
          <li className={navLinkStyle} key={i}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}

          {!isLoggedIn ? ( 
          <li className={navLinkStyle}>
            <Link to="/login"> Login </Link>
            </li> 
            ) : null}
      </ul>

      <div className="bdr w-60 px-3 rounded h-10 center bg-[#f5f5f5]">
        <input type="search" className="outline-none text-sm w-[300px] bg-[#F5F5F5]" placeholder="What are you looking for?"/>
        <CiSearch className="font-bold text-3xl" />        
    </div>


      <button
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="md:hidden order-1 text-4xl"
      >
        {isHamburgerOpen ? <IoCloseCircleOutline /> : <IoMenu />}
      </button>

{/* Mobile Navbar */}
      {isHamburgerOpen && (
        <ul 
        className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-28">
          {links.map((item, i) => (
            <li className={navLinkStyle} key={i}>
              <Link onClick={()=> setIsHamburgerOpen(false)} 
               to={item.link}>{item.title}</Link>
            </li>
          ))}

          {!isLoggedIn ? ( 
          <li className={navLinkStyle}>
            <Link onClick={()=> setIsHamburgerOpen(false)} 
             to="/login"> Login </Link>
            </li> 
            ) : null}
        </ul>
      )}
 <div className="icons center text-2xl gap-3">
        {isLoggedIn ? (
          <>
            <IoMdHeart className="" />
            <IoCart />
          </>
        ) : null}

        <Link to={'/profile'} className="bg-primary rounded-full overflow-hidden h-8 w-8 center text-base text-white">
          {isLoggedIn ? (
            
            <img src="https://avatars.githubusercontent.com/u/154784215?v=4" alt=""/>


          ) : (
            <FaRegUser />
          )}
        </Link>
      </div>
    

    </div>
  )
}
