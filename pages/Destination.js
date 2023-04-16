import React, { useState } from "react";
import Navigate from "@/components/Navigate";
import Image from "next/image";
import { destinationInfo } from "@/utils/destinationInfo";

const Destination = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <section className="destination page-height text-white">
      <main>
        <Navigate />
        <h3 className="md:text-[20px] lg:text-[28xl] lg:ml-[166px] text-base font-normal tracking-widest heading-three uppercase text-center md:text-left">
          <span className=" text-[#d0d6f976] font-bold opacity-25 pr-[18px] md:pl-14 lg:pl-0">
            01
          </span>{" "}
          Pick your destination
        </h3>
        {/* laptop screen */}
        <div className="hidden lg:flex justify-between w-[1047px] mt-16 mx-auto items-center">
          <div>
            {destinationInfo.map(({ id, image, title }) => {
              return (
                <div key={id} className="">
                  {toggled === id ? (
                    <Image
                      src={image}
                      width={445}
                      height={445}
                      alt={title}
                      className=""
                    />
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="my-auto">
            <div className="text-[#D0D6F9]">
              {destinationInfo.map(({ id, title }) => {
                return (
                  <button
                    key={id}
                    onClick={() => setToggled(id)}
                    className={`${
                      toggled === id
                        ? "heading-three uppercase tracking-widest text-[16px] title-fixed mr-[35px] text-white"
                        : "heading-three uppercase tracking-widest title-destination text-[16px] mr-[35px]"
                    }`}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
            {/* start of text */}
            <div className="">
              {destinationInfo.map(
                ({ title, note, id, distance, kilometers, km, time, days }) => {
                  return (
                    <article key={id} className="">
                      {toggled === id ? (
                        <div>
                          <div className="">
                            <h6 className="mt-[37px] text-[100px] uppercase heading-one">
                              {title}
                            </h6>
                            <p className="mt-[14px] heading-three text-lg text-[#D0D6F9] h-[128px] w-[445px]">
                              {note}
                            </p>
                            <div className="bg-[#383B4B] w-[444px] h-[1px] mt-[54px]"></div>
                          </div>
                          <div className="mt-7 flex">
                            <div className="mr-[68px]">
                              <p className="uppercase text-sm heading-two tracking-widest text-[#D0D6F9] mb-3">
                                {distance}
                              </p>
                              <h3 className="text-[28px] heading-one tracking-widest ">
                                {kilometers}
                                <span className="uppercase"> {km}</span>
                              </h3>
                            </div>
                            <div className="">
                              <p className="uppercase text-sm text-[#D0D6F9] heading-two mb-3">
                                {time}
                              </p>
                              <h3 className="text-[28px] uppercase heading-one ">
                                {days}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  );
                }
              )}
            </div>
            {/* end of text */}
          </div>
        </div>
        {/* tablet and mobile screen */}
        <div className="block lg:hidden">
          <div className="flex justify-center mt-8 mb-[26px] md:mt-[60px] md:mb-[53px]">
            {destinationInfo.map(({ id, image, title }) => {
              return (
                <div key={id} className="">
                  {toggled === id ? (
                    <div>
                      <Image
                        src={image}
                        width={300}
                        height={300}
                        alt={title}
                        className="hidden md:block"
                      />
                      <Image
                        src={image}
                        width={170}
                        height={170}
                        alt={title}
                        className="md:hidden"
                      />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* page title */}
          <div className="text-[#D0D6F9] flex justify-between w-[237px] md:w-[285.5px] mx-auto">
            {destinationInfo.map(({ id, title }) => {
              return (
                <button
                  key={id}
                  onClick={() => setToggled(id)}
                  className={`${
                    toggled === id
                      ? "heading-three uppercase tracking-widest text-[14px] md:text-[16px] title-fixed text-white"
                      : "heading-three uppercase tracking-widest title-destination text-[14px] md:text-[16px]"
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>
          {/* end of page title */}

          <div className="">
            {destinationInfo.map(
              ({ title, note, id, distance, kilometers, km, time, days }) => {
                return (
                  <article
                    key={id}
                    className="w-[327px] md:w-[573px] mx-auto text-center"
                  >
                    {toggled === id ? (
                      <div>
                        <div className="">
                          <h6 className="mt-[20px] md:mt-[32px] text-[56px] md:text-[80px] uppercase heading-one">
                            {title}
                          </h6>
                          <p className="mt-[1px] md:mt-[8px] heading-three text-[15px] md:text-lg text-[#D0D6F9]">
                            {note}
                          </p>
                          <div className="bg-[#383B4B] w-[327px] md:w-[573px] h-[1px] mt-[32px] md:mt-[54px] mx-auto"></div>
                        </div>
                        <div className="mt-[32px] md:mt-[29px] md:flex justify-center">
                          <div className="md:mr-[68px]">
                            <p className="uppercase text-sm heading-two tracking-widest text-[#D0D6F9] mb-3">
                              {distance}
                            </p>
                            <h3 className="text-[28px] heading-one tracking-widest ">
                              {kilometers}
                              <span className="uppercase"> {km}</span>
                            </h3>
                          </div>
                          <div className="mt-8 md:mt-0">
                            <p className="uppercase text-sm text-[#D0D6F9] heading-two mb-3">
                              {time}
                            </p>
                            <h3 className="text-[28px] uppercase heading-one ">
                              {days}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              }
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Destination;
