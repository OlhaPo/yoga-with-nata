import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {nav ? (
        <div
          className="fixed nav-menu bg-white w-full h-screen flex flex-col justify-center items-center"
          onClick={handleNav}
        >
          <a href="#about">O mnie</a>
          <a href="#zajęcia">Zajęcia</a>
          <a href="#contact">Kontakt</a>
        </div>
      ) : (
        ""
      )}
      <button className="absolute top-3 right-4 md:top-3 md:right-4 md:hidden hover:scale-130 ease-in duration-200 mb-5 hover:text-[#9C0E5B]">
        <FiMenu size={22} onClick={handleNav} />
      </button>
      <div className="pt-[33px] pb-[12px] md:pt-[12px] md:pb-[12px] flex flex-row border-b-2 justify-center md:justify-between px-20 items-center text-[18px] mb-12">
        <img
          src="./yoga-logo.jpg"
          alt="Joga z NatOM"
          className="h-[80px] w-[80px] md:h-[95px] md:w-[95px]"
        />

        <div className="nav-menu hidden md:inline-block">
          <a href="#about">O mnie</a>
          <a href="#zajęcia">Zajęcia</a>
          <a href="#contact">Kontakt</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
