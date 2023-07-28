import React from "react";
import { BiPhoneCall, BiLogoFacebookCircle } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <div
      className="flex flex-col md:flex-row border-t-2 text-[14px] md:text-[17px] justify-around items-center pt-6 pb-2 md:py-6 mt-10"
      id="contact"
    >
      <div className="inline-flex text-md md:text-[20px] items-center gap-1 pb-2 md:pb-0 text-[#9C0E5B] font-bold">
        <span className="hidden md:inline-block pr-2">
          <img
            src="./yoga-logo.jpg"
            alt="Joga z NatOM"
            className="h-[70px] w-[70px]"
          />
        </span>
        Joga z NatOM
      </div>
      <div className="flex flex-col items-center md:flex-row gap-1 md:gap-6 md:text-[16px]">
        <div className="flex md:inline-flex items-center gap-1 flex-2">
          <GoLocation className="text-[#9C0E5B]" />
          Bielsko- Biała, Polska
        </div>
        <div className="flex md:inline-flex items-center gap-1 flex-2">
          <BiPhoneCall className="text-[#9C0E5B]" />
          <a href="tel:+48721448339">+48721448339</a>{" "}
        </div>
        <div className="flex md:inline-flex items-center gap-1 flex-2">
          <FiMail className="text-[#9C0E5B]" />
          <a
            href="mailto:jogaznatom@gmail.com"
            target="_blank"
            className="hover:text-[#9C0E5B] hover:underline"
          >
            <span>jogaznatom@gmail.com</span>
          </a>
        </div>
        <div className="flex md:inline-flex items-center gap-1 flex-2">
          <BiLogoFacebookCircle className="text-[#9C0E5B]" />
          <a
            href="https://www.facebook.com/jogaznatom"
            target="_blank"
            className="hover:text-[#9C0E5B] hover:underline"
          >
            <span>Dołącz do grupy</span>
          </a>
        </div>
      </div>
      <div className="text-[12px] md:text-[16px] pt-5 md:pt-0">
        Projekt i realizacja:{" "}
        <a
          href="https://github.com/OlhaPo"
          target="_blank"
          className="hover:text-[#9C0E5B] hover:underline"
        >
          Olya Po
        </a>
      </div>
    </div>
  );
};

export default Footer;
