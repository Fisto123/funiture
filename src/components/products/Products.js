import React from "react";
import "./products.css";
const Products = () => {
  return (
    <div className="bg-[#FFF6EB] lg:h-screen xs:h-auto md:h-auto">
      <div>
        <h3 className="text-4xl text-[#583101] mx-auto py-16 text-center">
          Our Products
        </h3>
      </div>
      <div className="md:max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-3">
        <Card img="assets/pix1.png" name="Ottoman nordiac sofa" />
        <Card img="assets/p2.png" name="Fabric padded 2-sear sofa " />
        <Card img="assets/p3.png" name="Tufted grey sofa" />
      </div>
    </div>
  );
};
const Card = ({ img, name }) => {
  return (
    <div className="xs:mx-auto">
      <img src={img} alt="" />
      <div className="flex justify-between py-4">
        <h2 className="text-xl text-[#583101]">{name}</h2>
        <h2>$250</h2>
      </div>
      <div className="py-3 flex justify-between">
        <div className="flex gap-3">
          <h3 className="bg-[#583101] rounded-md  px-4 items-center text-white">
            Grey
          </h3>
          <h3 className="bg-[#583101] rounded-md  px-4 text-white ">Timber</h3>
          <h3 className="bg-[#583101] rounded-md  px-4 text-white">Full set</h3>
        </div>
        <div>
          <div className="flex">
            <img className="w-[20px]" src="./assets/star.png" alt="" />
            <img className="w-[20px]" src="./assets/star.png" alt="" />
            <img className="w-[20px]" src="./assets/star.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
