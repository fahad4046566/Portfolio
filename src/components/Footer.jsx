
import Links from "../components/Links";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer aria-label="Site footer" className="w-full">
      <div className="mx-auto px-4 py-6 flex flex-col items-center text-center gap-4 md:flex-row md:justify-around md:items-center md:text-left">
        <div className="icons">
          <Links />
        </div>

        <div className="copywright">
          <p className="text-gray-500 font-semibold md:text-base">Copyright © {new Date().getFullYear()} Fahad Bashir — All rights reserved</p>
        </div>

        <div className="logo">
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;