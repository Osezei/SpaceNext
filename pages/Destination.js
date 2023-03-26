import React, { useState } from "react";
import Navigate from "@/components/Navigate";
import Image from "next/image";
import { destinationInfo } from "@/utils/destinationInfo";

const Destination = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <section className="destination page-height text-white">
      <Navigate />

      <div className="items-center mt-[24px] md:mt-[40px]">
        <h3 className="md:text-[20px] text-base font-normal heading-two uppercase text-center md:text-left ">
          <span className=" text-[#d0d6f976] font-bold opacity-25 pr-[18px]">
            01
          </span>{" "}
          Pick your destination
        </h3>

        <div className="mt-[32px]">
          {destinationInfo.map(({ id, image, title }) => {
            return (
              <div key={id} className="flex justify-center">
                {toggled === id ? (
                  <div className=" ">
                    <Image
                      src={image}
                      width={170}
                      height={170}
                      alt={title}
                      className=""
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="w-[237.5px] mt-[26px] heading-two h-[28px] mx-auto flex justify-between text-[#D0D6F9] text-sm">
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
      </div>

      <div className="">
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
                    <h6 className="text-[56px] uppercase tracking-widest heading-one flex justify-center">
                      {title}
                    </h6>
                    <p className=" leading-loose heading-two mx-6 text-[#D0D6F9] text-sm">
                      {note}
                    </p>
                    <div className="w-[327px] h-[1px] bg-[#383B4B] mx-auto my-8"></div>
                    <div className="">
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
                  </div>
                ) : null}

                {/* another screen */}
                {toggled === id ? (
                  <div className="hidden">
                    <div className="">
                      <Image
                        src={image}
                        alt={title}
                        width={48}
                        height={48}
                        className=""
                      />
                    </div>
                    <div className="">
                      <h6 className="">{title}</h6>
                      <p className="top-wording leading-loose">{note}</p>
                      <div className="bg-[#d0d6f976]"></div>
                      <div className="">
                        <div>
                          <p className="uppercase">{distance}</p>
                          <h3 className=" ">
                            {kilometers}
                            <span className=""> {km}</span>
                          </h3>
                        </div>
                        <div className="">
                          <p className="">{time}</p>
                          <h3 className="">{days}</h3>
                        </div>
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
