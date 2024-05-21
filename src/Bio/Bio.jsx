import React from "react";

import Heading from "../components/heading/Heading";
import PrimaryButton from "../components/buttons/PrimaryButton";

import { resumeLink } from "../utils/commonUtils";

const Bio = ({ itemRef }) => {
  const navigateToResume = () => window.open(resumeLink, "_blank");

  return (
    <div
      ref={itemRef}
      className="bg-[#1d1d1d] pt-10 flex justify-center flex-col items-center"
    >
      <h6 className="sub-heading">My Bio</h6>
      <Heading mainHeading="About" subHeading="Me" />
      <div className="flex flex-wrap m-10 mx-40 justify-center">
        <div className="border-teal-500 mr-1 p-5 md:p-10 border-[0.2px] rounded-full h-full mb-4">
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 max-w-full max-h-full border-teal-500 border-[0.2px] rounded-full"
            src="assets/images/profilePicture.png"
            alt="profile"
          />
        </div>

        <div className="text-zinc-300 flex-1 text-sm 2xl:ml-20 xl:ml-20 lg:ml-10 md:ml-10 sm:ml-10">
          <p className="w-11/12">
            Back in 2019, I started creating custom websites for local
            businesses and quickly fell in love with coding and design. What
            started as a side project quickly turned into a passion, as I became
            captivated by the endless possibilities of coding and design. Since
            then, I've built and optimized software for a
            <a className="text-teal-500" href="https://www.recurclub.com/">
              {" "}
              fintech startup
            </a>
            ,{" "}
            <a className="text-teal-500" href="https://www.venuemonk.com/">
              a venue booking service
            </a>
            ,{" "}
            <a href="https://vfast.in/" className="text-teal-500">
              a SaaS product{" "}
            </a>
            , and
            <a className="text-teal-500" href="https://voxpopuliresearch.com/">
              {" "}
              a reseach company
            </a>
            . These experiences have deepened my understanding of various
            industries and technologies, allowing me to tackle diverse
            challenges and create impactful solutions.
          </p>

          <p className="mt-8 w-11/12">
            Now at{" "}
            <a className="text-teal-500" href="https://incruiter.com/">
              InCruiter
            </a>
            , I develop full stack solutions, focusing on efficient and
            intuitive user interfaces. My passion lies at the intersection of
            design and technology, crafting visually appealing and robust
            applications. I've also built multiple personal projects, including
            a video call.
          </p>

          <p className="mt-8 w-11/12">
            When I'm not coding, you'll find me hiking, exploring new cultures,
            playing games, spending time with my family, or trying exotic dishes
            from around the world.
          </p>
          <div className="text-black mt-10">
            <PrimaryButton
              title="View Resume"
              icon="/assets/icons/resume.svg"
              onClick={navigateToResume}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
