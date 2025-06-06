import logo from "../assets/images/logo-bookmark.svg";
import logoWhite from "../assets/images/logo-white-bookmark.svg";
import hamburgerMenu from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const links = ["Features", "Pricing", "Contact"];
  return (
    <header className="header relative z-50 w-full bg-white px-2 py-6">
      {/* Desktop nav */}
      <div className="hidden justify-between items-center uppercase w-full lg:flex ">
        <img src={logo} alt="Bookmark logo" className="h-6" />
        <ul className="flex justify-around items-end gap-4">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className=" text-xl hover:text-primary-red-400 cursor-pointer"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button className="login-button transition uppercase rounded-md px-8 py-2 bg-primary-red-400 text-white hover:bg-transparent hover:border-2 hover:border-primary-red-400 hover:text-primary-red-400 cursor-pointer">
          Login
        </button>
      </div>

      {/* Mobile top bar */}
      <div className="flex items-center justify-between w-full md:px-10 lg:hidden">
        <img
          src={showMenu ? logoWhite : logo}
          alt="Bookmark logo"
          className="h-6 z-50"
        />
        <button
          onClick={toggleMenu}
          className="cursor-pointer z-50"
          aria-label={showMenu ? "Close menu" : "Open menu"}
        >
          <img
            src={showMenu ? closeIcon : hamburgerMenu}
            alt={showMenu ? "Close menu" : "Open menu"}
          />
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-neutral-blue-950/90 z-40 flex flex-col items-center justify-between px-6 py-20 md:px-15 lg:hidden">
          <nav className="flex flex-col items-center justify-center gap-6 text-center w-full">
            <ul className="flex flex-col gap-6 w-full mt-10">
              {links.map((link) => (
                <li key={link}>
                  <hr className="w-full opacity-20 border-t mb-4 border-white h-[1px]" />
                  <a
                    href="#"
                    className="uppercase text-white text-lg tracking-wide hover:text-primary-red-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <hr className="w-full opacity-20 border-t mb-0 border-white h-[1px]" />
            </ul>
            <button className="login-button uppercase rounded-md px-8 py-2 mt-2 bg-transparent text-white border-2 border-white w-full cursor-pointer">
              Login
            </button>
          </nav>
          <div className="social-icons flex gap-8 ">
            <i className="fa-brands text-white hover:text-primary-red-400 hover:scale-110 transition-transform duration-200 cursor-pointer fa-square-facebook"></i>
            <i className="fa-brands text-white hover:text-primary-red-400 hover:scale-110 transition-transform duration-200 cursor-pointer fa-twitter"></i>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
