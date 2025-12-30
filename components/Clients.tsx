"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Education, Experience
        <span className="text-purple"> & Technical Growth</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-16 
         max-lg:mt-10"
        >
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex flex-row items-center justify-center gap-5 mt-10">
                <Image
                  src={company.img}
                  alt={company.name}
                  className="md:w-20 w-5"
                  width={100}
                  height={100}
                />
                <h1 className="text-3xl font-semibold">{company.name}</h1>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
