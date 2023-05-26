import React from "react";
import "./choose.css";
const Choose = () => {
  return (
    <div className="w-full lg:h-[504px] xs:h-auto xs:p-3 md:h-[600px]  bg-[#402400]">
      <div className="mx-auto items-center  ">
        <h2 className="text-4xl tracking-widest text-white items-center text-center py-16  md:mt-15 ">
          why choose us?
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:max-w-[1200px] mx-auto gap-2 py-0">
          <Card img={`/assets/star.png`} />
          <Card img={`/assets/discount.png`} />
          <Card img={`/assets/send.png`} />
        </div>
      </div>
    </div>
  );
};
const Card = ({ img }) => {
  return (
    <div className=" bg-[#FFF6EB] w-[280px] h-[160px] xs:mx-auto relative">
      <p className="text-[#583101] text-center py-3 text-2xl font-extrabolder">
        High Quality
      </p>
      <p className="text-[#583101] text-center py-3 text-md text-sm">
        nulia Losem malit cupsdium laborium. magna nullia duis ultramaco cilum
        doloe
      </p>
      <div>
        <img
          src={img}
          className="bg-white absolute left-[-40px] border border-white top-12 rounded-full  p-3"
          alt=""
        />
      </div>
    </div>
  );
};

export default Choose;
