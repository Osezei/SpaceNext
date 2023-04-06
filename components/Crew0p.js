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

      <div className="">
        {crewInfo.map(({ id, image, name }) => {
          return (
            <article key={id} className="">
              {toggled === id ? (
                <div className="mt-[32px] w-[327px] h-[223px] mx-auto md:hidden object-contain">
                  <Image
                    src={image}
                    width={368}
                    height={540}
                    alt={name}
                    className=" md:mt-28"
                  />
                  <div className="h-[1px] w-[327px] bg-[#383B4B]"></div>
                </div>
              ) : null}
            </article>
          );
        })}
        <div className="absolute top-[610px] w-full text-center md:hidden">
          {crewInfo.map(({ id }) => {
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
        {crewInfo.map(({ id, name, position, image, note }) => {
          return (
            <article
              key={id}
              className="mt-[274px] lg:ml-[167px] md:mt-[60px] lg:mt-[0]"
            >
              {toggled === id ? (
                <div className="block text-center lg:text-left lg:flex lg:justify-between items-center">
                  <div className="">
                    <h2 className="heading-one text-white/50 text-[16px] md:text-[24px] lg:text-[32px] uppercase tracking-wider">
                      {position}
                    </h2>
                    <h5 className="heading-one text-2xl md:text-[40px] lg:text-[56px] lg:my-9 uppercase tracking-wider ">
                      {name}
                    </h5>
                    <p className="w-[327px] md:w-[444px] mt-[16px] lg:mt-2 lg:w-[520px] mx-auto lg:mx-0 text-15px md:text-16px lg:text-[18px] text-[#D0D6F9]">
                      {note}
                    </p>
                  </div>
                  {/* <div className="hidden lg:flex">
                    <Image
                      src={image}
                      width={615}
                      height={607}
                      alt={name}
                      className="px-24 py-20"
                    />
                  </div> */}
                  {/* testing */}
                  <div className="hidden lg:flex image-container">
                    <Image
                      src={image}
                      width={600}
                      height={600}
                      alt={name}
                      className=""
                    />
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
      <div className="hidden md:inline-block absolute w-full text-center top-[480px] lg:left-[167px] lg:top-[659px] lg:text-left">
        {crewInfo.map(({ id }) => {
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
          <article key={id} className="mt-28">
            {toggled === id ? (
              <div className="hidden md:flex justify-center object-contain w-[500px] h-[500px] lg:hidden mx-auto">
                <Image
                  src={image}
                  width={408}
                  height={540}
                  alt={name}
                  className=""
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
