import React from "react";
import yogaNataRoksi from "/images/yoga-nata-roksi.jpg";
import nataCover from "/images/yoga-nata-1.jpg";

const About = () => {
  return (
    <div className="md:w-[80%] m-auto px-4" id="about">
      <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-14 pb-5 md:pb-10">
        <div className="flex-1 md:flex-2">
          <h1 className="text-[22px] text-center mb-2 md:text-left md:text-[30px] font-bold text-[#9C0E5B]">
            Cześć! Nazywam się Natalia&nbsp;Wysocka
          </h1>
          <p className="text-sm pb-5 md:pb-0 text-justify md:text-md leading-[29px]">
            Jestem sertifikowaną instruktorką z jogi. Przyjechałam z Ukrainy, z
            Kijowa, razem z swoimi dzećmi z powodu wojny. Mam kilkuletnie
            doswiadczenie prowadzenia zajęć z jogi oraz zarządzania studia jogi.
            Moim drugim zawodem i hobby jest fotografia. Preferuję reportage,
            fotografuję joga imprezy. I myślę że to jest świetne połączenie.
          </p>
        </div>
        <div className="flex-1 md:flex-2">
          <img
            src={yogaNataRoksi}
            alt=""
            className="shadow-2xl shadow-gray-400 border border-slate-400"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-0 md:gap-14 pb-10">
        <div className="flex-1 md:flex-2">
          <img
            src={nataCover}
            alt=""
            className="shadow-2xl shadow-gray-400 border border-slate-400"
          />
        </div>
        <div className="flex-1 md:flex-2">
          <p className="text-sm text-justify md:text-md leading-[29px] pb-5 md:pb-0">
            Joga uczy nas być uważnymi w ciele i w ruchah. I poprzez tę uważność
            uczy nas być świadomymi, kontrolować swoje myśli i uczucia.
            Oczywiście większość joginew mogą zrobić mostek lub stanie na rękach
            oraz szpagat. I można postawić sobie za cel osiągnąć pewną pozycję i
            robić ćwiczenia tylko dla tego. Ale dlaczego nam to stanie na rękach
            w ogóle? Inny szlak - regularna praktyka jogi, praca z ciałem i
            umysłem, i raptem ten szpagat lub mostek stają się dostępnymi jak
            rezultat praktyki. I to jest jak bonus do spokojnego, kontrolowanego
            stanu umysłu, wzmocnionego ciała i dobrego samopoczucia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
