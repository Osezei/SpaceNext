const Hero = () => {
  return (
    <section className="block lg:flex  lg:justify-between mt-[112px] text-center lg:text-justify lg:ml-[165px] md:mt-[202px] lg:mt-[251px]">
      <div className="w-[327px] md:w-[450px] h-[276px] md:h-[334px] lg:h-[382px] mx-auto lg:mr-[382px] ">
        <h3 className="heading-two text-[20px] lg:text-[28px] text-[#D0D6F9]">
          So, you want to travel to
        </h3>
        <h1 className="heading-one text-[80px] md:text-[150px] text-white ">
          SPACE
        </h1>
        <p className="text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] heading-two">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="mx-auto lg:mx-0 banner w-[450px] h-[450px] rounded-full flex justify-center items-center mt-[81px] md:mt-[156px] lg:mt-0">
        <div className=" bg-white w-[242px] lg:w-[274px] flex justify-center items-center h-[242px] lg:h-[274px] rounded-full ease-in-out duration-300">
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
    </section>
  );
};

export default Hero;
