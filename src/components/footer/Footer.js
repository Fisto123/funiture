import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="w-full bg-[#2F1A01] md:h-[513px] xs:h-auto">
      <div className="grid md:grid-cols-2 xs:grid-cols-1 ">
        <div className="footer_left md:px-10 xs:px-0 xs:mx-auto w-full text-white">
          <div className="flex flex-col xs:mx-auto">
            <h2 className="text-2xl mt-12  xs:mx-auto md:mx-0">
              Subscribe to our newsletter
            </h2>
            <div className="py-3 xs:mx-2 md:mx-0">
              <input
                type="text"
                placeholder="Enter email address to subscribe"
                className="border border-white md:w-2/3 xs:w-full bg-transparent p-3 rounded-md"
              />
            </div>
            <div className="py-4  xs:px-6 md:px-0 ">
              <button className="bg-[#FFF6EB] text-[#2F1A01] p-2 rounded-md xs:w-full md:w-1/3 ">
                Subscribe now
              </button>
            </div>
          </div>
        </div>
        <div className="footer_right flex md:flex-row xs:flex-col text-white gap-3 mt-10 xs:mx-auto md:mx-0">
          <div className="xs:mx-auto md:mx-0">
            <ul className="flex flex-col gap-5  ">
              <li className="text-xl">Our Products</li>
              <li className="text-sm ">Grey Tufted Sofas</li>
              <li className="text-sm">Office Tables</li>
              <li className="text-sm">Livingroom Chiurs</li>
              <li className="text-sm">Kitchen Tables</li>
              <li className="text-sm">Classroom Chairs</li>
              <li className="text-sm">Seminar Hall Chairs</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-5 ">
              <li className="text-xl xs:mx-auto md:mx-0">Contact Us</li>
              <li className="text-sm xs:mx-auto md:mx-0">Head Office</li>
              <li className="text-sm xs:mx-auto md:mx-0">
                4155 Washington Avenuee, Manchester, Kuntucky,
              </li>
              <li className="text-sm xs:mx-auto md:mx-0">Phone Lines</li>
              <li className="text-sm xs:mx-auto md:mx-0">+2347067796825</li>
            </ul>
          </div>
          <div className="xs:mx-auto md:mx-0">
            <ul className="flex flex-col gap-5">
              <li className="text-xl">Links</li>
              <li className="text-sm">Home</li>
              <li className="text-sm">Products</li>
              <li className="text-sm">Carts</li>
              <li className="text-sm">Categories</li>
              <li className="text-sm">About us</li>
              <li className="text-sm">FAQs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center mt-20  text-white">
        <h2>Iyiola Oluwafisayo M. (c) 2023</h2>
      </div>
    </div>
  );
};

export default Footer;
