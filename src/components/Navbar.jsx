import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

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
          <button>
            <AiOutlineClose
              size={25}
              className="hover:scale-130 ease-in duration-200 mb-5 hover:text-[#9C0E5B]"
            />
          </button>
          <a href="#about">O mnie</a>
          <a href="#zajęcia">Zajęcia</a>
          <a href="#contact">Kontakt</a>
        </div>
      ) : (
        ""
      )}
      <button>
        <FiMenu
          size={25}
          onClick={handleNav}
          className="absolute top-3 right-4 md:hidden hover:scale-130 ease-in duration-200 mb-5 hover:text-[#9C0E5B]"
        />
      </button>
      <div className="md:pt-[12px] pb-[24px] flex flex-row border-b-2 justify-center md:justify-between px-20 items-center text-[18px] mb-10 md:mb-20">
        <img
          src="./yoga-logo.jpg"
          alt="Joga z NatOM"
          className="h-[100px] w-[100px]"
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
