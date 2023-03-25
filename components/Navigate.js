import React from "react";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/utils/url";
import styled from "styled-components";

//page images
import logo from "@/assets/shared/logo.svg";

const Navigate = () => {
  return (
    <Section className="home text-white ">
      <div className="pl-[55px] pt-[40px] flex justify-between items-center">
        <Image src={logo} alt="logo" width={48} height={48} placeholder="" />
        <div className="hidden lg:block h-[1px] w-[473px] opacity-[25%] bg-white ml-[64px]"></div>
        <div className="w-[830px] h-[96px] nav-bg flex items-center">
          <ul className="w-[542px] h-[19px] ml-[123px] flex justify-between ">
            {links.map((link) => {
              const { id, titleNumber, title, url } = link;
              return (
                <li key={id} className="flex items-center">
                  <Link
                    href={url}
                    className="title text-[16px] tracking-widest uppercase heading-one font-light"
                  >
                    <span className=" pr-[10px] heading-two font-bold">
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
    </Section>
  );
};

export default Navigate;

const Section = styled.div`
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
    bottom: -35px;
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
