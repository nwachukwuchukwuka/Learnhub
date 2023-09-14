import React from "react";
import image1 from "../assets/image1.jpg";
import image3 from "../assets/image3.webp";

const Collaborate = () => {
  return (
    <div className="bg-[#f9f4f5]">
      <section className="max-w-[90%] mx-auto flex flex-col-reverse lg:flex-row justify-between py-[20px] lg:pt-[80px] lg:pb-[80px] items-center">
        <div className="lg:mr-[35px] text-center lg:text-left">
          <h1 className="text-[30px] lg:text-[40px] font-bold">
            Collaborate with us
          </h1>
          <p className="text-lg lg:text-base">
            Interested in inspiring the next generation of top Software
            Engineers? Collaborate with us. We are committed to helping as many
            young Africans kickstart a career in technology by providing them
            with access to quality technical education by real-world experts.
          </p>
          <button className="bg-black text-white px-[30px] py-[10px] mt-7">
            <a className="mr-2" href="https://wa.me/08070623479"> Contact Us</a>
            <i class="fa-brands fa-whatsapp"></i>
          </button>
        </div>

        <div className="mt-7 lg:mt-0">
          <img
            className="w-full lg:w-[1600px] h-[auto]"
            src={image3}
            alt="image"
          />
        </div>
      </section>
    </div>
  );
};

export default Collaborate;
