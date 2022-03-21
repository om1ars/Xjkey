import React from "react";
import Hero from "@/components/HomeComponents/Hero";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
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
export default function Reviews() {
  return (
    <div className="">
      <Hero
        title="Central Code Reviews"
        subtitle="From real people. Working at real (and awesome) companies."
      />
      <div className="flex w-full flex-wrap gap-3">
        {whyusItems.map((item, i) => (
          <>
            <div
              id={item.href}
              className="w-1/4 dark:border-slate-800 dark:bg-slate-700 group relative   rounded border-t-4 border-buttonBg  bg-white shadow-lg "
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
                    className="justify- flex items-center rounded-full transition-all duration-200 group-hover:scale-[102%]"
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
                  porro eaque ut consequuntur suscipit quidem voluptate? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                  officia minus placeat, omnis praesentium provident modi
                  delectus in dolorem. Minus exercitationem quod, alias porro
                  eaque ut consequuntur suscipit quidem voluptate? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Aliquam officia
                  minus placeat, omnis praesentium provident modi delectus in
                  dolorem. Minus exercitationem quod, alias porro eaque ut
                  consequuntur suscipit quidem voluptate? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Aliquam officia minus
                  placeat, omnis praesentium provident modi delectus in dolorem.
                  Minus exercitationem quod, alias porro eaque ut consequuntur
                  suscipit quidem voluptate? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquam officia minus placeat,
                  omnis praesentium provident modi delectus in dolorem. Minus
                  exercitationem quod, alias porro eaque ut consequuntur
                  suscipit quidem voluptate? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquam officia minus placeat,
                  omnis praesentium provident modi delectus in dolorem. Minus
                  exercitationem quod, alias porro eaque ut consequuntur
                  suscipit quidem voluptate? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquam officia minus placeat,
                  omnis praesentium provident modi delectus in dolorem. Minus
                  exercitationem quod, alias porro eaque ut consequuntur
                  suscipit quidem voluptate? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquam officia minus placeat,
                  omnis praesentium provident modi delectus in dolorem. Minus
                  exercitationem quod, alias porro eaque ut consequuntur
                  suscipit quidem voluptate? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquam officia minus placeat,
                  omnis praesentium provident modi delectus in dolorem. Minus
                  exercitationem quod, alias porro eaque ut consequuntur
                  suscipit quidem voluptate? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquam officia minus placeat,
                  omnis praesentium provident modi delectus in dolorem. Minus
                  exercitationem quod, alias porro eaque ut consequuntur
                  suscipit quidem voluptate? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquam officia minus placeat,
                  omnis praesentium provident modi delectus in dolorem. Minus
                  exercitationem quod, alias porro eaque ut consequuntur
                  suscipit quidem voluptate?
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
