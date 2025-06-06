import ContactUs from "./ContactUs";
import logo from "../assets/images/logo-white-bookmark.svg";

const Footer = () => {
  const links = ["Features", "Pricing", "Contact"];
  return (
    <footer className="flex flex-col justify-center items-center mt-10 w-full">
      <ContactUs />
      <div className="footer flex flex-col justify-center items-center gap-8 bg-neutral-blue-950 text-white w-full px-4 py-12  md:flex-row md:justify-around">
        <img src={logo} alt="bookmark logo" />
        <nav className="links">
          <ul className="flex flex-col justify-around items-center gap-4 md:flex-row md:justify-around md:gap-12">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className=" text-xl uppercase font-normal text-[15px] text-center text-white hover:text-primary-red-400 cursor-pointer"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="social-icons flex gap-8 ">
          <i className="fa-brands text-white hover:text-primary-red-400 hover:scale-110 transition-transform duration-200 cursor-pointer fa-square-facebook"></i>
          <i className="fa-brands text-white hover:text-primary-red-400 hover:scale-110 transition-transform duration-200 cursor-pointer fa-twitter"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
