import React from "react";
import yogaLesson from "./images/yoga-lesson.jpg";
import yogaLesson2 from "./images/yoga-lesson-2.jpg";
import yogaLesson4 from "./images/yoga-lesson-4.jpg";
import yogaNata from "./images/yoga-nata-2.jpg";

const Classes = () => {
  return (
    <div className="md:w-[80%] m-auto px-4" id="zajęcia">
      <h2 className="text-[28px] font-bold text-center mb-5 pt-10 md:pt-20 text-[#9C0E5B]">
        Zajęcia
      </h2>
      <p className="pb-10 md:pb-20 text-justify md:text-center text-sm md:text-md leading-[29px]">
        Teraz prowadzę zajęcia z jogi w Bielsku-Białej i jestem otwarta na
        współpracę ze studiami oraz klubami. Również proponuję "out-of-office"
        jogę w biurach ta indywidualne zajęcia.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 md:items-center">
        <img
          src={yogaLesson2}
          alt=""
          className="rounded-md md:shadow-2xl md:shadow-gray-400 h-full object-cover"
        />
        <img
          src={yogaNata}
          alt=""
          className="rounded-md md:shadow-2xl md:shadow-gray-400 h-full object-cover"
        />
        <img
          src={yogaLesson}
          alt=""
          className="rounded-md md:shadow-2xl md:shadow-gray-400 h-full object-cover"
        />
        <img
          src={yogaLesson4}
          alt=""
          className="rounded-md md:shadow-2xl md:shadow-gray-400 h-full object-cover"
        />
        <img
          src={yogaLesson}
          alt=""
          className="rounded-md md:shadow-2xl md:shadow-gray-400 h-full object-cover"
        />
        <img
          src={yogaLesson2}
          alt=""
          className="rounded-md md:shadow-2xl md:shadow-gray-400 h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Classes;
