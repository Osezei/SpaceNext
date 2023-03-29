import React, { useState } from "react";
import Navigate from "@/components/Navigate";
import { techInfo, techMobile } from "@/utils/techInfo";
import Image from "next/image";

const Technology = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <section className="page-height tech text-white">
      <Navigate />
      <div className="items-center mt-[24px] md:mt-[40px] relative">
        <h3 className="md:text-[20px] lg:text-[28xl] lg:ml-[166px] text-base font-normal heading-two uppercase text-center md:text-left">
          <span className=" text-[#d0d6f976] font-bold opacity-25 pr-[18px] md:pl-14 lg:pl-0">
            01
          </span>{" "}
          space launch 101
        </h3>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-20">
          <div className="ml-[160px] h-[303px] w-[80px]">
            {techInfo.map(({ id }) => {
              return (
                <button
                  key={id}
                  onClick={() => setToggled(id)}
                  className={`${
                    toggled === id
                      ? "mb-8 w-[80px] h-[80px] border-2 rounded-full border-[#d0d6f976] bg-white text-[32px] text-black text-home ease-in-out"
                      : "mb-8 w-[80px] h-[80px] border-2 rounded-full border-[#d0d6f976] text-home text-[32px] ease-in-out"
                  }`}
                >
                  {id}
                </button>
              );
            })}
          </div>
          <div className="">
            {techInfo.map(({ id, image, title, titleTop, note }) => {
              return (
                <article key={id} className="">
                  {toggled === id ? (
                    <div className="">
                      <div className="w-[444px] h-[303px] my-auto">
                        <h2 className="text-[16px] text-home text-[#D0D6F9] uppercase">
                          {titleTop}
                        </h2>
                        <h3 className="text-[50px] uppercase text-home">
                          {title}
                        </h3>
                        <p className="text-[18px] top-wording pt-[20px] text-[#D0D6F9]">
                          {note}
                        </p>
                      </div>
                      {/* <Image
                      src={image}
                      alt={title}
                      className="w-[515px] h-[527px] object-contain"
                      width={515}
                      height={527}
                    /> */}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
        <div>
          {techInfo.map(({ id, image, title }) => {
            return (
              <article key={id} className="">
                {toggled === id ? (
                  <Image
                    src={image}
                    width={515}
                    height={527}
                    alt={title}
                    className="w-[515px] h-[527px] object-contain"
                  />
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technology;
