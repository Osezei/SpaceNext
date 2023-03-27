import React, { useState } from "react";
import Navigate from "@/components/Navigate";
import { crewInfo } from "@/utils/crewInfo";
import Image from "next/image";

const Crew = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <section className="page-heigh crew text-white">
      <Navigate />
      <div className="items-center mt-[24px] md:mt-[40px] relative">
        <h3 className="md:text-[20px] lg:text-[28xl] lg:ml-[166px] text-base font-normal heading-two uppercase text-center md:text-left">
          <span className=" text-[#d0d6f976] font-bold opacity-25 pr-[18px] md:pl-14 lg:pl-0">
            02
          </span>{" "}
          meet your crew
        </h3>
      </div>

      <div className="ml-[166px] mt-[154px]">
        {crewInfo.map(({ id, name, position, image, note }) => {
          return (
            <article key={id}>
              {toggled === id ? (
                <div className="grid grid-cols-2 ">
                  <div className="">
                    <h2 className="heading-one text-white/50 text-[32px] uppercase tracking-wider">
                      {position}
                    </h2>
                    <h5 className="heading-one text-[56px] uppercase flex tracking-wider w-[532px]">
                      {name}
                    </h5>

                    <p className="w-[444px] h-[128px] text-[#D0D6F9]">{note}</p>
                  </div>
                  <div>
                    <Image src={image} width={615} height={607} alt={name} />
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
      <div className="">
        {crewInfo.map(({ id, name }) => {
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
    </section>
  );
};

export default Crew;
