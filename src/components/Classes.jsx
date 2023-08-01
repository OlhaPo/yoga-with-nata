import yogaLesson from "/images/yoga-lesson.jpg";
import yogaLesson2 from "/images/yoga-lesson-2.jpg";
import yogaLesson4 from "/images/yoga-lesson-4.jpg";
import yogaNata from "/images/yoga-nata-2.jpg";
import React from "react";
import GalleyImages from "./GalleryImages";

const Classes = () => {
  return (
    <div className="md:w-[80%] m-auto px-4" id="zajęcia">
      <h2 className="text-[28px] text-center mb-2 pt-5 md:pt-10 text-[#9C0E5B]">
        Zajęcia
      </h2>
      <p className="pb-5 md:pb-10 text-justify md:text-center text-sm md:text-md leading-[29px]">
        Teraz prowadzę zajęcia z jogi w Bielsku-Białej i jestem otwarta na
        współpracę ze studiami oraz klubami. Również proponuję "out-of-office"
        jogę w biurach ta indywidualne zajęcia.
      </p>

      <GalleyImages
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <a data-fancybox="gallery" href={yogaLesson2}>
          <img alt="" src={yogaLesson2} className="gallery-image" />
        </a>
        <a data-fancybox="gallery" href={yogaNata}>
          <img alt="" src={yogaNata} className="gallery-image" />
        </a>
        <a data-fancybox="gallery" href={yogaLesson}>
          <img alt="" src={yogaLesson} className="gallery-image" />
        </a>
        <a data-fancybox="gallery" href={yogaLesson4}>
          <img alt="" src={yogaLesson4} className="gallery-image" />
        </a>
        <a data-fancybox="gallery" href={yogaLesson}>
          <img alt="" src={yogaLesson} className="gallery-image" />
        </a>
        <a data-fancybox="gallery" href={yogaLesson2}>
          <img alt="" src={yogaLesson2} className="gallery-image" />
        </a>
      </GalleyImages>
    </div>
  );
};

export default Classes;
