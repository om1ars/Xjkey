import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";

// const featuredJobsCategories = [
//   "Sales (Corporate, Real Estate, Telesales, etc.)",
//   "Customer Service",
//   "Other",
//   "Creative Writing",
//   "Project Management",
//   "Marketing - Digital",
//   "IT - Software Development",
//   "Human Resources",
//   "Accounting & Finance",
// ];

const featuredJobsItems = [
  {
    companyName: "160+ hand-picked questions",
    jobTitle: "Algorithms for Interview",
    link:"algoFlip",
    image: "/img/01.jpg",
  },
  {
    companyName: "200+ templates, clones and more...",
    jobTitle: " Advanced React.js",
    image: "/img/02.jpg",
  },
  {
    companyName: "100+ hourse video explanation",
    jobTitle: "Online lessons",
    image: "/img/03.jpg",
  },
  {
    companyName: "Feature-Rich Coding Workspace",
    jobTitle: "Enviromental editor",
    image: "/img/04.jpg",
  },
  {
    companyName: "Mock interviews",
    jobTitle: "Couch meeting",
    image: "/img/05.jpg",
  },
  {
    companyName: "Space-Time Complexity Analyses",
    jobTitle: "How to solve algorithms",
    image: "/img/06.jpg",
  },
  {
    companyName: "Achievements",
    jobTitle: "Online Sertificates",
    image: "/img/07.jpg",
  },
];

export const FeaturedJobs = () => {
  return (
    <section id="featured-jobs">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Why EzCode?</h2>
      </div>
      <div id="featured-jobs__categories" className="mb-4">
        {/* <Swiper
          modules={[FreeMode, Scrollbar, Mousewheel]}
          direction="horizontal"
          freeMode={true}
          mousewheel={true}
          scrollbar={{ draggable: true, hide: true }}
          slidesPerView="auto"
          spaceBetween={8}
          id="featured-jobs__categories__slider"
          className="!py-4"
        >
          <SwiperSlide className="!w-auto">
            <Chip label="all" active />
          </SwiperSlide>
          {featuredJobsCategories.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <Chip label={item} />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
      {/* !-m-4 to fix box-shadow cropping due to overflow:hidden */}
      <div id="featured-jobs__items" className="!-m-4">
        <Swiper
          className="!p-4" // !p-4 to fix box-shadow cropping due to overflow:hidden
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            "475": {
              slidesPerView: 2,
            },
            "640": {
              slidesPerView: 3,
            },
            "1024": {
              slidesPerView: 4,
            },
          }}
        >
          {featuredJobsItems.map((item, i) => (
            <SwiperSlide key={i}>
              <a >
                <a href={`#${item.link}`} className="group block overflow-hidden bg-white rounded transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                  <div className="relative block overflow-hidden  pt-[70%]">
                    <Image
                      src={item.image}
                      alt={item.companyName}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-200 group-hover:scale-[102%]"
                    />
                  </div>

                  <div className="flex flex-col border-t p-4 dark:border-slate-600">
                    <h5 className="block truncate text-xl font-semibold capitalize">
                      {item.jobTitle}
                    </h5>
                    <span className="block truncate text-slate-500 dark:text-slate-400">
                      {item.companyName}
                    </span>
                  </div>
                </a>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
