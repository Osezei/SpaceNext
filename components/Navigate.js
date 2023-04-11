import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/utils/url";
import styled from "styled-components";

//page images
import logo from "@/assets/shared/logo.svg";
import burger from "@/assets/shared/icon-hamburger.svg";
import closeBtn from "@/assets/shared/icon-close.svg";
import { Container } from "postcss";

const Navigate = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <section className=" text-white">
      <div className="hidden md:flex pl-[55px] pt-[40px]  justify-between items-center">
        <Image src={logo} alt="logo" width={48} height={48} placeholder="" />
        <div className="hidden lg:block h-[1px] w-[473px] z-10 opacity-[25%] bg-white ml-[64px] grow absolute right-[800px]"></div>
        <div className=" w-[450px] lg:w-[830px] h-[96px] nav-bg flex items-center relative">
          <ul className="w-[356px] h-[18px] lg:w-[542px] lg:h-[19px] mx-auto lg:ml-[123px] flex justify-between">
            {links.map((link) => {
              const { id, titleNumber, title, url } = link;
              return (
                <li key={id} className="flex items-center">
                  <Link
                    href={url}
                    className="title text-[14px] lg:text-[16px] tracking-wider lg:tracking-widest uppercase heading-one font-light"
                  >
                    <span className="hidden lg:inline-block pr-[10px] heading-two font-bold">
                      {titleNumber}
                    </span>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* mobile view */}
      <div className="flex mx-[24px] pt-[24px] justify-between md:hidden items-center">
        <Image src={logo} width={40} height={40} alt="logo" />
        <Image
          src={burger}
          width={24}
          height={21}
          alt="burger-menu"
          className={`${toggled === true ? "hidden" : " cursor-pointer"}`}
          onClick={() => setToggled(true)}
        />
        <div
          className={`${
            toggled === true
              ? "navigation relative h-screen"
              : "navigation relative navigation-close"
          }`}
        >
          <Image
            src={closeBtn}
            width={19.09}
            height={19.09}
            alt="close-btn"
            className="cursor-pointer absolute top-[33.95px] right-[26.45px]"
            placeholder=""
            onClick={() => setToggled(false)}
          />
          <ul className="absolute top-[118px] left-[32px]">
            {links.map((link) => {
              const { id, titleNumber, title, url } = link;
              return (
                <li key={id} className="pt-[32px] ">
                  {toggled === true ? (
                    <Link
                      href={url}
                      className="text-[16px] tracking-widest heading-one uppercase"
                    >
                      <span className="pr-[12px] tracking-widest heading-two font-bold">
                        {titleNumber}
                      </span>{" "}
                      {title}
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navigate;
