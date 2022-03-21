import React from "react";

export default function VideosComponents() {
  return (
    <div className="flex justify-between text-justify sm:flex-col  md:flex-col lg:flex-row">
      <div className="w-6/12 pl-5 pr-5">
        <div>
          <h1>Our Videos Set Us Apart.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            architecto corporis obcaecati quis error autem impedit aliquid id
            fugiat pariatur doloremque, delectus voluptatibus maiores odit ipsa
            aspernatur dolorem quo non.
          </p>
        </div>
        <div className="mt-6 flex sm:flex-col md:flex-col lg:flex-row">
          <div className="mr-6 text-justify">
            <h3>Conceptual Overview</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              beatae culpa eveniet error, nesciunt quo veritatis nihil debitis
              numquam enim totam dolorum esse perspiciatis incidunt labore,
              alias voluptatibus molestiae dignissimos!
            </p>
          </div>
          <div>
            <h3>Code Walkthrough</h3>
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
