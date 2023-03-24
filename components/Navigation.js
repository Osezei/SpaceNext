import Link from "next/link";
import Image from "next/image";
//import styled from "styled-components";
import { links } from "@/utils/url";
import { useState } from "react";
import styled, { css } from "styled-components";

import "animate.css";
import Logo from "@/assets/shared/logo.svg";
import Burger from "@/assets/shared/icon-hamburger.svg";
import CloseBtn from "@/assets/shared/icon-close.svg";

const Navigation = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <Nav className="text-white">
      <div className="text-white hidden md:flex items-center w-[1385px] h-[96px]">
        <Image
          src={Logo}
          alt="logo"
          className="w-48px h-48px bg-white rounded-full absolute left-[55px] top-[64px]"
          placeholder=""
        />
        <div className="hidden lg:block w-[473px] h-[1px] opacity-[25%] bg-white absolute left-[167px] top-[88px]"></div>
        <ul className="flex heading-one uppercase justify-center w-[450px] lg:w-[830px] h-[96px] nav-bg items-center absolute top-[40px] right-[0px]">
          {links.map((link) => {
            const { id, titleNumber, title, url } = link;
            return (
              <li key={id}>
                <Link
                  href={url}
                  className="mr-[20px] lg:mr-[48px] flex title text-14px lg:text-[16px] tracking-wider lg:tracking-widest"
                >
                  <span className="hidden lg:block heading-two pr-[12px] font-bold tracking-wider lg:tracking-widest">
                    {titleNumber}
                  </span>{" "}
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* mobile view */}
      <div className="flex mx-[24px] pt-[24px] justify-between md:hidden items-center">
        <Image src={Logo} alt="logo" className="w-[40px] h-[40px]" />
        <Image
          src={Burger}
          alt="burger-menu"
          className={`${
            toggled === true ? "hidden" : "w-[24px] h-[21px] cursor-pointer"
          }`}
          onClick={() => setToggled(true)}
        />
        <div
          className={`${
            toggled === true
              ? "navigation relative h-screen animate__animated animate__fadeInRight"
              : "navigation relative navigation-close"
          }`}
        >
          <Image
            src={CloseBtn}
            alt="close-btn"
            className="w-[19.09px] h-[19.09px] cursor-pointer absolute top-[33.95px] right-[26.45px]"
            placeholder=""
            onClick={() => setToggled(false)}
          />
          <ul className="absolute top-[118px] left-[32px]">
            {links.map((link) => {
              const { id, titleNumber, title, url } = link;
              return (
                <li key={id} className="pt-[32px]">
                  {toggled === true ? (
                    <Link
                      href={url}
                      className="text-[16px] tracking-widest heading-one"
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
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div`
  .nav-bg {
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    -webkit-backdrop-filter: blur(40.7742px);
  }

  .title {
    position: relative;
  }
  .title::after {
    content: " ";
    position: absolute;
    bottom: -36px;
    left: 0;
    display: block;
    height: 3px;
    width: 0%;
    background: #fff;
    transition: 0.3s;
  }
  .title:hover::after {
    width: 100%;
    left: 0;
  }
`;
