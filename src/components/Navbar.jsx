import { NavLink } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "./Logo";

const Navbar = () => {
  const navLinks = [
    { id: 1, path: null, title: <IoCloseSharp /> },
    { id: Math.random(Date.now()), path: "/", title: "Home" },
    { id: Math.random(Date.now()), path: "/projects", title: "Projects" },
    { id: Math.random(Date.now()), path: "/about", title: "About Me" },
    { id: Math.random(Date.now()), path: "/skills", title: "Skills" },
    { id: Math.random(Date.now()), path: "/contact", title: "Contact" },
  ];
  return (
    <>
      <div className="navbar bg-base-100  sticky top-0 z-50  shadow-lg">
        <div className="navbar-start">
          <div className="drawer drawer-start md:hidden">
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-5" className="drawer-button">
                <CgMenuLeftAlt className="text-blue-700 text-2xl font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] underline underline-offset-8"/>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-5"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {/* Sidebar content here */}
                {navLinks.map((item) => {
                  return (
                    <li key={item.id}>
                      <NavLink
                       className={({ isActive }) =>
                        `transition-all duration-300 text-xl py-4 px-4${ isActive
                          ? "text-blue-700 font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] underline underline-offset-8"
                          : " hover:text-blue-500"
                        }
                       
                        `
                    }
                        onClick={() => {
                          document.getElementById("my-drawer-5").checked =
                            false;
                        }}
                        to={item.path}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              
                <div className="divider"></div>
              </ul>
            </div>
          </div>
          <div className="ml-10">
            <Logo />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {navLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  className={item.id === 1 ? "md:hidden block" : "block"}
                >
                  <NavLink
                    className={({ isActive }) =>
                      `transition-all duration-300 text-xl ${
                        isActive
                          ? "text-blue-700 font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] underline underline-offset-8"
                          : " hover:text-blue-500"
                      }`
                    }
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end md:pr-30">
          <ThemeToggler />
        </div>
      </div>
    </>
  );
};

export default Navbar;
