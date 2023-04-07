import React, { useState } from "react";
import Navigate from "@/components/Navigate";
import Image from "next/image";
import { destinationInfo } from "@/utils/destinationInfo";

const Destination = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <section className="destination page-height text-white">
      <Navigate />

      <div className="items-center mt-[24px] md:mt-[40px] relative">
        <h3 className="md:text-[20px] lg:text-[28xl] lg:ml-[166px] text-base font-normal heading-two uppercase text-center md:text-left">
          <span className=" text-[#d0d6f976] font-bold opacity-25 pr-[18px] md:pl-14 lg:pl-0">
            01
          </span>{" "}
          Pick your destination
        </h3>

        <div className="lg:flex mt-[64px]">
          {destinationInfo.map(({ id, image, title }) => {
            return (
              <div key={id} className="">
                {toggled === id ? (
                  <div className=" ">
                    <div className="flex justify-center md:hidden">
                      <Image
                        src={image}
                        width={170}
                        height={170}
                        alt={title}
                        className=""
                      />
                    </div>
                    <div className="hidden md:flex justify-center lg:hidden">
                      <Image
                        src={image}
                        width={300}
                        height={300}
                        alt={title}
                        className=""
                      />
                    </div>
                    <div className="hidden lg:flex ml-[230px] mr-[157px]">
                      <Image
                        src={image}
                        width={445}
                        height={445}
                        alt={title}
                        className=""
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}

          {/* information on the site */}

          <div className=" text-sm">
            <div className="heading-two flex justify-center mt-[53px] lg:mt-0 lg:justify-start text-[#D0D6F9] text-sm">
              {destinationInfo.map(({ id, title }) => {
                return (
                  <button
                    key={id}
                    onClick={() => setToggled(id)}
                    className={`${
                      toggled === id
                        ? " uppercase tracking-widest title-fixed mr-[35px] text-white"
                        : "uppercase tracking-widest title-destination mr-[35px]"
                    }`}
                  >
                    {title}
                  </button>
                );
              })}
            </div>

            <div className="pt-[37px]">
              {/* laptop view */}
              {destinationInfo.map(
                ({ title, note, id, distance, kilometers, km, time, days }) => {
                  return (
                    <article
                      key={id}
                      className="w-[327px] md:w-[573px] lg:w-[445px] mx-auto text-center lg:text-left lg:mx-0 text-white  "
                    >
                      {toggled === id ? (
                        <div>
                          <div className="">
                            <h6 className="heading-one text-[56px]  md:text-[92px] lg:text-[100px] uppercase my-[20px] md:my-[37px]">
                              {title}
                            </h6>
                            <p className="text-[#D0D6F9] text-[15px] md:text-lg ">
                              {note}
                            </p>
                            <div className="bg-[#383B4B] w-[327px] md:w-[573px] lg:w-[444px] h-[1px] mt-[32px] md:mt-[54px]"></div>
                          </div>
                          <div className="md:flex justify-center mt-[32px] md:mt-[28px] lg:justify-start">
                            <div className="md:mr-[79px]">
                              <p className="uppercase text-sm heading-two pb-3 tracking-widest text-[#D0D6F9]">
                                {distance}
                              </p>
                              <h3 className="text-[28px] heading-one tracking-widest mt-3 md:mt-0">
                                {kilometers}
                                <span className="uppercase"> {km}</span>
                              </h3>
                            </div>
                            <div className="mt-8 md:mt-0">
                              <p className="uppercase text-sm text-[#D0D6F9] heading-two pb-3">
                                {time}
                              </p>
                              <h3 className="text-[28px] uppercase heading-one mt-3 md:mt-0">
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
        </div>
      </div>
    </section>
  );
};

export default Destination;
