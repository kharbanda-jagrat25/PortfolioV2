import React from "react";
import Heading from "../heading/Heading";

const Projects = ({ itemRef }) => {
  const projectList = [
    {
      name: "InCruiter",
      img: "assets/images/incruiter.jpeg",
      link: "https://incruiter.com/",
      description:
        "InCruiter provides remote interview solutions for businesses to identify the perfect fit for their company through precision and accurate evaluation. We have been enabling startups & enterprises to improve their interview process. ",
    },
    {
      name: "Recur Club",
      img: "assets/images/recurClub.jpeg",
      link: "https://www.recurclub.com/",
      description:
        "Recur Club is a debt marketplace where companies can raise debt capital tailored to their business needs with a dedicated capital expert. ",
    },
    {
      name: "VenueMonk",
      img: "assets/images/venueMonk.jpeg",
      link: "https://www.venuemonk.com/",
      description:
        "VenueMonk.com is an online venue booking portal with the widest range of venues available in Delhi NCR, Gurgaon, Noida, Faridabad, and Ghaziabad.",
    },
    {
      name: "Ant Creatives ",
      img: "assets/images/antCreatives.jpeg",
      link: "https://antcreatives.com/",
      description:
        "We, at AntCreatives, are a passionate bunch of people working in software development. AntCreatives Online Services is a Full Stack Development firm with speciality in developing applications.",
    },
    {
      name: "Parity Infotech Solutions",
      img: "assets/images/parity.jpeg",
      link: "https://paritysystem.in/",
      description:
        "Parity Infotech Solutions is a growing independent provider of IT services that has a number of established delivery processes.",
    },
    {
      name: "Vox Populi Research",
      img: "assets/images/voxPopuli.jpeg",
      link: "https://voxpopuliresearch.com/",
      description:
        "Vox Populi Research is a market research agency, specialising in Qualitative and Quantitative Research.",
    },
    {
      name: "Video Calling",
      img: "assets/images/videoCalling.png",
      link: "https://video-calling-web-app.netlify.app/",
      description:
        "Revolutionize communication with our Webrtc-powered video calling app, delivering seamless, high-quality connections across devices.",
    },
    {
      name: "Book Club",
      img: "assets/images/bookClub.png",
      link: "https://new-book-club.netlify.app/",
      description:
        "Explore, buy, and filter books by author while diving into references with ease on our dynamic book club e-commerce platform.",
    },
    {
      name: "Class Booking",
      img: "assets/images/classBooking.jpg",
      link: "https://class-booking-app.netlify.app/",
      description:
        "Effortlessly schedule your tuition classes based on available slots and timings through our intuitive class booking service.",
    },
    {
      name: "Vfast",
      img: "assets/images/vfast.jpeg",
      link: "https://vfast-background-verification.netlify.app/",
      description:
        "Streamline your background verification process with vFast, an intuitive app delivering swift results for seamless screenings and reliable outcomes.",
    },
  ];
  return (
    <div
      ref={itemRef}
      className="bg-[#131313] pt-10 flex justify-center flex-col items-center"
    >
      <h6 className="sub-heading">Portfolio</h6>
      <Heading mainHeading="Organisations" subHeading="& Projects" />
      <div className="flex flex-wrap gap-10 mx-16 xl:mx-44 lg:mx-44 md:mx-8 sm:mx-8 2xl:mx-44">
        {projectList?.map(({ name, img, link, description }) => (
          <div
            className="my-5 flex items-start flex-col cursor-pointer w-full md:[30%] sm:w-[20%] transition-all duration-500 hover:opacity-60"
            key={name}
            onClick={() => window.open(link, "_blank")}
          >
            <div className="border-[0.5px] border-teal-500 rounded-lg p-5 bg-zinc-800 w-full">
              <img className="rounded-lg w-full h-full" src={img} alt={name} />
            </div>
            <div className="flex flex-col mt-3">
              <h5 className="text-white text-md">{name}</h5>
              <h6 className="text-zinc-500 text-sm w-4/5 mt-2 leading-5">
                {description}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
