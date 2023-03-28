import React, { useState } from "react";
import Navigate from "@/components/Navigate";
import { crewInfo } from "@/utils/crewInfo";
import Image from "next/image";

const Crew = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <section className="page-height crew text-white relative">
      <Navigate />
      <div className="items-center mt-[24px] md:mt-[40px]">
        <h3 className="md:text-[20px] lg:text-[28xl] lg:ml-[166px] text-base font-normal heading-two uppercase text-center md:text-left">
          <span className=" text-[#d0d6f976] font-bold opacity-25 pr-[18px] md:pl-14 lg:pl-0">
            02
          </span>{" "}
          meet your crew
        </h3>
      </div>

      <div className="lg:ml-[166px] ">
        {crewInfo.map(({ id, name, position, image, note }) => {
          return (
            <article key={id} className="mt-[60px] lg:mt-[0]">
              {toggled === id ? (
                <div className="block text-center lg:text-left lg:flex lg:justify-between items-center">
                  <div className="">
                    <h2 className="heading-one text-white/50 text-[24px] lg:text-[32px] uppercase tracking-wider">
                      {position}
                    </h2>
                    <h5 className="heading-one text-[40px] lg:text-[56px] uppercase tracking-wider ">
                      {name}
                    </h5>
                    <p className="w-[444px] mt-[16px] lg:mt-0 md:w-[520px] mx-auto lg:mx-0 text-16px lg:text-[18px] text-[#D0D6F9]">
                      {note}
                    </p>
                  </div>
                  <div className="hidden lg:flex">
                    <Image
                      src={image}
                      width={615}
                      height={607}
                      alt={name}
                      className="px-24 py-20"
                    />
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
      <div className="absolute w-full text-center top-[480px] lg:left-[167px] lg:top-[750px] lg:text-left">
        {crewInfo.map(({ id, name, image }) => {
          return (
            <div
              key={id}
              onClick={() => setToggled(id)}
              className={`${
                toggled === id
                  ? "dot dot-active mr-4 cursor-pointer"
                  : "dot mr-4 cursor-pointer"
              }`}
            ></div>
          );
        })}
      </div>
      {crewInfo.map(({ id, image, name }) => {
        return (
          <article key={id}>
            {toggled === id ? (
              <div className="flex justify-center">
                <Image
                  src={image}
                  width={368}
                  height={540}
                  alt={name}
                  className="mt-28"
                />
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
};

export default Crew;
