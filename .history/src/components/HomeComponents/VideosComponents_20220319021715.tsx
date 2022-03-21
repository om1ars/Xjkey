import React from "react";
import {GiGalaxy} from 'react-icons/gi'
export default function VideosComponents() {
  return (
    <div className="flex justify-between text-justify sm:flex-col  md:flex-col lg:flex-row">
      <div className="w-6/12 pl-5 pr-5">
        <div>
          <h1 className="mb-3 text-4xl text-black">Our Videos Set Us Apart.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            architecto corporis obcaecati quis error autem impedit aliquid id
            fugiat pariatur doloremque, delectus voluptatibus maiores odit ipsa
            aspernatur dolorem quo non.
          </p>
        </div>
        <div className="mt-12 flex sm:flex-col md:flex-col lg:flex-row">
          <div className="mr-10 text-justify">
            <h3 className="mb-3 text-2xl text-black flex">
              <span className="w-">Conceptual Overview</span>
              <span className=""><GiGalaxy /></span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              beatae culpa eveniet error, nesciunt quo veritatis nihil debitis
              numquam enim totam dolorum esse perspiciatis incidunt labore,
              alias voluptatibus molestiae dignissimos!
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-2xl text-black">
              <span>Code Walkthrough</span>
              <span></span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              beatae culpa eveniet error, nesciunt quo veritatis nihil debitis
              numquam enim totam dolorum esse perspiciatis incidunt labore,
              alias voluptatibus molestiae dignissimos!
            </p>
          </div>
        </div>
      </div>
      <div className="w-6/12 border"></div>
    </div>
  );
}
