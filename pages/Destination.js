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

        <div className="mt-[32px] lg:mt-[97px]">
          {destinationInfo.map(({ id, image, title }) => {
            return (
              <div key={id} className="flex justify-center lg:justify-start">
                {toggled === id ? (
                  <div className=" ">
                    <div className="md:hidden">
                      <Image
                        src={image}
                        width={170}
                        height={170}
                        alt={title}
                        className=""
                      />
                    </div>
                    <div className="hidden md:flex lg:hidden">
                      <Image
                        src={image}
                        width={300}
                        height={300}
                        alt={title}
                        className=""
                      />
                    </div>
                    <div className="hidden lg:flex pl-[166px]">
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
        </div>

        <div className="lg:absolute top-[24px] right-[321.5px] w-[237.5px] md:w-[285px] mt-[26px] md:mt-[53px] heading-two h-[28px] mx-auto flex justify-between text-[#D0D6F9] text-sm">
          {destinationInfo.map(({ id, title }) => {
            return (
              <button
                key={id}
                onClick={() => setToggled(id)}
                className={`${
                  toggled === id
                    ? " uppercase tracking-widest title-fixed"
                    : "uppercase tracking-widest title-destination"
                }`}
              >
                {title}
              </button>
            );
          })}
        </div>
        <div className="hidden lg:block w-[445px] absolute top-[130px] right-[164px] ">
          {/* laptop view */}
          {destinationInfo.map(
            ({ title, note, id, distance, kilometers, km, time, days }) => {
              return (
                <article key={id} className="">
                  {toggled === id ? (
                    <div>
                      <div>
                        <h6 className="heading-one text-[100px] uppercase">
                          {title}
                        </h6>
                        <p className="text-[#D0D6F9] text-lg">{note}</p>
                        <div className="bg-[#383B4B] w-[444px] h-[1px] mt-[54px]"></div>
                      </div>
                      <div className="flex mt-[28px]">
                        <div className="mr-[79px]">
                          <p className="uppercase text-sm heading-two tracking-widest text-[#D0D6F9]">
                            {distance}
                          </p>
                          <h3 className="text-[28px] heading-one tracking-widest">
                            {kilometers}
                            <span className="uppercase"> {km}</span>
                          </h3>
                        </div>
                        <div className="">
                          <p className="uppercase text-sm text-[#D0D6F9] heading-two">
                            {time}
                          </p>
                          <h3 className="text-[28px] uppercase heading-one">
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
        {/* end of laptop view */}
      </div>

      <div className="lg:hidden">
        {destinationInfo.map(
          ({
            title,
            note,
            image,
            id,
            distance,
            kilometers,
            km,
            time,
            days,
          }) => {
            return (
              <article key={id} className="text-center">
                {toggled === id ? (
                  <div className="">
                    <h6 className="text-[56px] md:text-[80px] md:mt-[32px] lg:mt-0 uppercase tracking-widest heading-one flex justify-center">
                      {title}
                    </h6>
                    <p className=" leading-loose heading-two mx-6 text-[#D0D6F9] text-sm md:text-[16px] md:mx-[150px]">
                      {note}
                    </p>
                    <div className="w-[327px] md:w-[573px] h-[1px] bg-[#383B4B] mx-auto my-8 md:mt-[49px] md:mb-[29px]"></div>
                    {/* mobile view */}
                    <div className="md:hidden">
                      <div className="">
                        <p className="uppercase text-sm heading-two tracking-widest text-[#D0D6F9]">
                          {distance}
                        </p>
                        <h3 className="mt-3 text-2xl heading-one tracking-widest">
                          {kilometers}
                          <span className="uppercase"> {km}</span>
                        </h3>
                      </div>
                      <div className="mt-8">
                        <p className="uppercase text-[#D0D6F9] heading-two">
                          {time}
                        </p>
                        <h3 className="text-[28px] uppercase mt-3 heading-one">
                          {days}
                        </h3>
                      </div>
                    </div>
                    {/* tablet view */}
                    <div className="hidden md:flex justify-center gap-10 text-center">
                      <div className="">
                        <p className="uppercase text-sm heading-two tracking-widest text-[#D0D6F9]">
                          {distance}
                        </p>
                        <h3 className="text-[28px] heading-one tracking-widest mt-3 font-normal">
                          {kilometers}
                          <span className="uppercase"> {km}</span>
                        </h3>
                      </div>
                      <div className="">
                        <p className="uppercase text-sm text-[#D0D6F9] heading-two">
                          {time}
                        </p>
                        <h3 className="text-[28px] uppercase heading-one mt-3 font-normal">
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
    </section>
  );
};

export default Destination;
