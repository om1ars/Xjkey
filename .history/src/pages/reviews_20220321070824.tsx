import React from "react";
import Hero from "@/components/HomeComponents/Hero";
export default function Reviews() {
  return (
    <div>
      <Hero
        title="Central Code Reviews"
        subtitle="From real people. Working at real (and awesome) companies."
      />
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
    </div>
  );
}
