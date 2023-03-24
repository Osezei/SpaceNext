import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Section>
      <div className="flex ml-[165px] mt-[251px]"></div>
      <div className="w-[450px] h-[382px] mr-[382px]">
        <h3 className="heading-one2 text-[28px] text-[#D0D6F9]">
          So, you want to travel to
        </h3>
        <h1 className="heading-one text-[150px] text-white ">SPACE</h1>
        <p className="text-[#D0D6F9] text-[18px] heading-one2">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="banner w-[450px] h-[450px] rounded-full flex justify-center items-center">
        <div className=" bg-white w-[274px] flex justify-center items-center h-[274px] rounded-full ease-in-out duration-300">
          <p className="heading-one text-[32px] tracking-wider text-[#0b0d17]">
            EXPLORE
          </p>
        </div>
      </div>
      {/* <div className="lg:hidden mt-12 lg:bg-[#d0d6f976] flex justify-center  rounded-full ease-in-out duration-300">
        <p className="text-home bg-white text-black w-fit px-20 py-32 rounded-full text-3xl">
          EXPLORE
        </p>
      </div> */}
    </Section>
  );
};

export default Hero;

const Section = styled.div`
  .banner {
    transition: 0.3s;
  }
  .banner:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
