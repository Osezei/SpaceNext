import React, { useState } from "react";
import Navigate from "@/components/Navigate";
import { techInfo, techMobile } from "@/utils/techInfo";
import Image from "next/image";

const Technology = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <section className="page-height tech text-white">
      <main>
        <Navigate />
        <div className="items-center mt-[24px] md:mt-[40px] relative">
          <h3 className="md:text-[20px] lg:text-[28xl] lg:ml-[166px] text-base font-normal heading-two uppercase text-center md:text-left">
            <span className=" text-[#d0d6f976] font-bold opacity-25 pr-[18px] md:pl-14 lg:pl-0">
              01
            </span>{" "}
            space launch 101
          </h3>
        </div>

        <div className="hidden lg:flex justify-between items-center">
          <div className="flex items-center gap-20 grow">
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
                        <div className="w-[470px] h-[303px] my-auto">
                          <h2 className="text-[16px] text-home text-[#D0D6F9] uppercase">
                            {titleTop}
                          </h2>
                          <h3 className="text-[50px] uppercase text-home">
                            {title}
                          </h3>
                          <p className="text-[18px] top-wording pt-[20px] text-[#D0D6F9] lg:w-[444px]">
                            {note}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:flex ml-[156px] ">
            {techInfo.map(({ id, image, title }) => {
              return (
                <article key={id} className="">
                  {toggled === id ? (
                    <Image
                      src={image}
                      priority
                      alt={title}
                      className="w-[515px] h-[527px] object-contain "
                    />
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>

        {/* tablet and mobile screen */}
        <div className="mt-8 md:mt-[60px] lg:hidden">
          <div className="mx-auto">
            {techMobile.map(({ id, image, title }) => {
              return (
                <div key={id} className="">
                  {toggled === id ? (
                    <Image src={image} alt={title} width={1024} height={310} />
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-8 md:mt-14">
            {techMobile.map(({ id }) => {
              return (
                <button
                  key={id}
                  onClick={() => setToggled(id)}
                  className={`${
                    toggled === id
                      ? "mr-4 w-10 md:w-[60px] h-10 md:h-[60px] border-2 rounded-full border-[#d0d6f976] bg-white text-[16px] md:text-2xl text-black text-home ease-in-out"
                      : "mr-4 w-10 md:w-[60px] h-10 md:h-[60px] border-2 rounded-full border-[#d0d6f976] text-home text-[16px] md:text-2xl ease-in-out"
                  }`}
                >
                  {id}
                </button>
              );
            })}
          </div>
          <div>
            {techMobile.map(({ id, note, title, titleTop }) => {
              return (
                <article key={id} className="text-center">
                  {toggled === id ? (
                    <div className="mt-[26px] md:mt-11">
                      <div className=" md:w-[458px] md:h-[237px] mx-auto">
                        <h2 className="text-[14px] md:text-[16px] text-home text-[#D0D6F9] uppercase">
                          {titleTop}
                        </h2>
                        <h3 className="mt-4 text-2xl md:text-[40px] uppercase text-home">
                          {title}
                        </h3>
                        <p className="px-10 md:px-0 mt-4 text-[15px] md:text-[16px] top-wording text-[#D0D6F9]">
                          {note}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Technology;
