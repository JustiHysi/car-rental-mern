import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate;

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24
    xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all
    ${location.pathname === "/" && "bg-light"}`}
    >
      <Link to="/">
        <img src={assets.logo} className="h-8" />
      </Link>

      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16
      max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row
      items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all
      duration-300 z-50 ${location.pathname === "/" ? "bg-light" : "bg-white"}
      ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}

        <div
          className="hidden lg:flex items-center text-sm gap-2 border
        border-borderColor px-3 rounded-full max-w-56"
        >
          <input
            type="text"
            className="py-1.5 w-full bg-transparent
            outline-none placeholder-gray-500"
            placeholder="Search products"
          />
          <img src={assets.search_icon} />
        </div>

        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <button onClick={() => navigate("/owner")} className="cursor-pointer">
            Dashboard
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary
            hover:bg-primary-dull transition-all text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </div>

      <button className="sm:hidden cursor-pointer" aria-label="Menu" onClick={()=>setOpen(!open)
      }>
        <img src={open ? assets.close_icon : assets.menu_icon} />
      </button>

    </div>
  );
};

export default Navbar;



// import React from "react";
// import { assets } from "../assets/assets";
// import { NavLink } from "react-router-dom";

// const NAV_ITEMS = [
//   {
//     id: "home",
//     name: "Home",
//     link: "/",
//   },
//   {
//     id: "cars",
//     name: "Cars",
//     link: "/cars",
//   },
//   {
//     id: "about",
//     name: "About",
//     link: "/about",
//   },
// ];

// const Navbar = () => {
//   return (
//     <div className="flex justify-between  py-3 px-24 items-center border-b border-borderColor md:px-16 ">
//       <img src={assets.logo}  className="h-[25px] mr-1.5 " />

//       <div className="flex gap-x-10 mr-1.5">
//         {NAV_ITEMS.map((item) => (
//           <NavLink className="text-grayColorText font-medium" key={item.id} to={item.link}>
//             {item.name}
//           </NavLink>
//         ))}
//       </div>

//       <div className="flex items-center gap-6">
//         <div className="flex justify-between border border-borderColor rounded-3xl px-4 py-2">
//           <input type="text" placeholder="Search cars" className="outline-none" />
//            <img src={assets.search_icon} />
//         </div>

//         <NavLink className="text-grayColorText text-nowrap"  to={"/list"}>
//             List cars
//           </NavLink>

//           <button className="bg-primary hover:bg-primary-dull text-white text-nowrap rounded-xl py-2 px-8 w">Sign up</button>

          
//       </div>
//     </div>
//   );
// };

// export default Navbar;
