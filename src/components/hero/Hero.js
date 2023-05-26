import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="text-black mt-28 bg-[#FFF6EB]  w-full md:w-full mx-auto  h-auto">
      <div className="flex md:flex-row xs:flex-col justify-between py-16">
        <div className=" xs:mx-auto w-full xs:text-center sm:text-start h-[300px] px-10 mt-9">
          <div>
            <a className="text-[#583101] lg:text-6xl md:text-4xl font-extrabolder xs:text-2xl sm:text-3xl ">
              find the perfect furniture pieces to complete your home.
            </a>
          </div>
          <div className="py-4">
            <a className="text-[#583101] text-xl font-200  xs:text-sm md:text-xl ">
              "Transform your home with a beautiful sanctuary with our stunning
              furniture collection."
            </a>
          </div>
          <div className="py-4 flex xs:flex-col sm:flex-row gap-3">
            <div>
              <button className="bg-[#583101] text-white w/1/3 px-10 p-3 rounded-md">
                Register
              </button>
            </div>
            <div>
              <button className="bg-[#FFF6EB] text-[#583101] border border-[#583101] sm:w-full xs:w-1/3  px-10 p-3 rounded-md">
                Explore products
              </button>
            </div>
          </div>
        </div>
        <div className="w-full xs:mx-auto sm:text-start h-[500px]  md:m-4">
          <div>
            <img src="/assets/hero1.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
