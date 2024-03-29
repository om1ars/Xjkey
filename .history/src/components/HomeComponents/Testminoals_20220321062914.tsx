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

const whyusItems = [
  {
    companyName: "160+ hand-picked questions",
    jobTitle: "devicon-google-plain colored",
    href: "algoFlip",
    image: "/img/01.jpg",
  },
  {
    companyName: "200+ templates, clones and more...",
    jobTitle: "devicon-facebook-plain colored",
    image: "/img/02.jpg",
  },
  {
    companyName: "100+ hourse video explanation",
    jobTitle: "devicon-apple-original colored",
    image: "/img/03.jpg",
    href: "video-explanation",
  },
  {
    companyName: "Feature-Rich Coding Workspace",
    jobTitle: "devicon-github-original colored",
    image: "/img/04.jpg",
  },
  {
    companyName: "Mock interviews",
    jobTitle: "devicon-google-plain colored",
    image: "/img/05.jpg",
  },
  {
    companyName: "Space-Time Complexity Analyses",
    jobTitle: "devicon-handlebars-plain colored",
    image: "/img/06.jpg",
  },
  {
    companyName: "Achievements",
    jobTitle: "devicon-google-plain colored",
    image: "/img/07.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section id="why-us" className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center justify-center text-center text-2xl font-bold">
          And Over 100,000 Satisfied Engineers.
        </h2>
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
          {whyusItems.map((item, i) => (
            <SwiperSlide key={i}>
              <>
                <div
                  id={item.href}
                  className="dark:border-slate-800 dark:bg-slate-700 group relative block  rounded border-t-4 border-buttonBg  bg-white shadow-lg transition-all duration-150 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="dark:border-slate-600 relative  flex flex-col border-t p-4 text-center">
                    <div className=" mb-3 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.companyName}
                        // layout="fill"
                        // objectFit="cover"
                        width={60}
                        height={60}
                        className="  justify- flex items-center rounded-full transition-all duration-200 group-hover:scale-[102%]"
                      />
                    </div>
                    <h5 className="block truncate text-4xl  font-semibold capitalize">
                      <i className={`${item.jobTitle} `}></i>
                    </h5>
                    <span className="text-slate-500 dark:text-slate-400 mb-5 block truncate">
                      {item.companyName}
                    </span>
                    <span className="mini_overflow h-40 overflow-y-scroll">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam officia minus placeat, omnis praesentium provident
                      modi delectus in dolorem. Minus exercitationem quod, alias
                      porro eaque ut consequuntur suscipit quidem voluptate?
                    </span>
                  </div>
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      <div className="flex items-center  огы">
      <button className="mt-10 rounded  flex items-center justify-center  bg-buttonBg pl-4 pr-4 pt-2 pb-2 text-white transition-all hover:bg-buttonHover">
          Read more testimonials
        </button>
      </div>
      </div>
    </section>
  );
};
