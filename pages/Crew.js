import React, { useState } from "react";
import Navigate from "@/components/Navigate";
import { crewInfo } from "@/utils/crewInfo";
import Image from "next/image";

const Crew = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <section className="page-height crew text-white relative">
      <main>
        <Navigate />
        <div className="items-center mt-[24px] md:mt-[40px]">
          <h3 className="md:text-[20px] lg:text-[28xl] lg:ml-[166px] text-base font-normal heading-three uppercase text-center md:text-left">
            <span className=" text-[#d0d6f976] font-bold opacity-25 pr-[18px] md:pl-14 lg:pl-0">
              02
            </span>{" "}
            meet your crew
          </h3>
        </div>

        {/* laptop screen */}
        {/* texts */}
        <div className="hidden lg:flex justify-between min-w-[1024px] max-w-[1136px] mx-auto overflow-hidden">
          <div className="my-auto">
            <div className="">
              {crewInfo.map(({ id, name, position, note }) => {
                return (
                  <article key={id} className=" ">
                    {toggled === id ? (
                      <div className="">
                        <h2 className="heading-one mb-[13px] text-white/50 text-[32px] uppercase tracking-wider">
                          {position}
                        </h2>
                        <h5 className="heading-one text-[56px] uppercase tracking-wider leading-10 h-[56px]">
                          {name}
                        </h5>
                        <p className="w-[444px] mt-[29px] h-[160px] text-[18px] text-[#D0D6F9]">
                          {note}
                        </p>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
            {/* bottom navigation */}
            <div className="mt-[120px]">
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
          </div>
          {/* end of text */}
          <div>
            {crewInfo.map(({ id, image, name }) => {
              return (
                <article key={id} className="">
                  {toggled === id ? (
                    <Image
                      src={image}
                      alt={name}
                      className="overflow-hidden w-[560px] h-[560px]"
                      priority
                      width={615}
                      height={607}
                    />
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
        {/* tablet and mobile devices */}
        <div className="flex flex-col-reverse md:flex-col lg:hidden">
          <div className="">
            {crewInfo.map(({ id, name, position, note }) => {
              return (
                <article key={id} className="mt-[32px] md:mt-[60px] ">
                  {toggled === id ? (
                    <div className="h-[237px] md:h-[182px] text-center">
                      <h2 className="heading-one mb-2  text-white/50 text-[16px] md:text-[24px] uppercase tracking-wider">
                        {position}
                      </h2>
                      <h5 className="heading-one text-[24px] md:text-[40px] uppercase tracking-wider leading-10">
                        {name}
                      </h5>
                      <p className="w-[327px] md:w-[592px] mt-[16px] text-[15px] md:text-[16px] text-[#D0D6F9] mx-auto">
                        {note}
                      </p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
          {/* navigation */}
          <div>
            <div className="mt-[32px] md:mt-10 flex justify-between mx-auto w-[88px]">
              {crewInfo.map(({ id }) => {
                return (
                  <div
                    key={id}
                    onClick={() => setToggled(id)}
                    className={`${
                      toggled === id
                        ? "dot dot-active cursor-pointer"
                        : "dot cursor-pointer"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
          {/* end of navigation  */}
          {/* image */}
          <div>
            {crewInfo.map(({ id, image, name }) => {
              return (
                <article key={id} className="">
                  {toggled === id ? (
                    <div>
                      <Image
                        src={image}
                        alt={name}
                        className="overflow-hidden hidden md:block w-[440px] h-[540px] mt-10 mx-auto"
                        priority
                        width={433}
                        height={532}
                      />
                      <div>
                        <Image
                          src={image}
                          alt={name}
                          width={153.9}
                          height={222}
                          className="block md:hidden mt-8 h-[223px] w-[327px] overflow-hidden mx-auto"
                        />
                        <div className="block md:hidden h-[1px] w-[327px] mx-auto bg-[#383B4B]"></div>
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
          {/* end of image */}
        </div>
      </main>
    </section>
  );
};

export default Crew;
