import "../App.css";
import img1 from "../assets/bgIMG_1.jpg";
import img2 from "../assets/bgIMG_2.jpg";
import img3 from "../assets/bgIMG_3.jpg";
import brand1 from "../assets/brand_logo_1.png";
import brand2 from "../assets/brand_logo_2.png";
import brand3 from "../assets/brand_logo_3.png";
import brand4 from "../assets/brand_logo_4.png";
import brand5 from "../assets/brand_logo_5.png";
import brand6 from "../assets/brand_logo_6.png";
import brand7 from "../assets/brand_logo_7.png";
import brand8 from "../assets/brand_logo_8.png";
import brand9 from "../assets/brand_logo_9.png";
import brand10 from "../assets/brand_logo_10.png";
import brand11 from "../assets/brand_logo_11.png";
import brand12 from "../assets/brand_logo_12.png";
import { Link } from "react-router-dom";
import { useReadCate } from "../lib/supabase/CRUD";
import NavbarHome from "./Navbar/NavbarHome";
import Footer from "./Footer";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Homepage() {
  const { data: category } = useReadCate();
  const bg_img = [img1, img2, img3];
  const brandLogo = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand11,
    brand12,
  ];

  return (
    <>
      <NavbarHome />

      {/*  */}
      <Swiper
        effect="slide"
        loop={true}
        freeMode
        speed={10000}
        slidesPerView={"auto"}
        autoplay={{
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          waitForTransition: true,
          stopOnLastSlide: false,
          reverseDirection: false,
        }}
        modules={[Autoplay]}
        className="mySwiper max-w-[1400px] h-[568px] mt-4"
      >
        {bg_img.map((b, index) => (
          <SwiperSlide
            key={index}
          >
            <div
              className=" max-w-[1400px] h-[568px] bg-teal-800
                w-full m-auto py-0  relative "
            >
              <img
                src={b}
                className="w-full h-full object-cover object-center relative hover:scale-105 transition duration-700"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute z-20 top-0 flex flex-col w-full h-full text-white justify-center  items-center backdrop-brightness-50 ">
          <h3 className="text-2xl md:text-3xl font-bold">
            NEW STUFF
            <span> JUST DROPPED</span>
          </h3>
          <p className="text-xl md:text-2xl">Shop your favorite stuff now!!</p>
          <div className="flex flex-row gap-5 my-5">
            <Link
              to={"products"}
              className="bg-white px-7 py-3   shadow-2xl rounded-full text-xl text-black font-semibold flex items-center justify-center hover:bg-gray-200 font-"
            >
              Shop now
            </Link>
          </div>
        </div>
      </Swiper>

      {/*  */}
      {/* Category start */}

      <div className="mt-5">
        <p className="text-black font-semibold rounded-xl bg-gray-200 text-2xl w-fit px-5 py-2 ml-5">
          Browse Category
        </p>
        <div className="flex flex-wrap justify-center gap-x-52 gap-y-5 my-5 ">
          {category?.map((c) => (
            <Link
              to={"/products"}
              key={c.id}
              className="backdrop-blur-xl backdrop-brightness-95 rounded-xl px-4 py-5 w-52 shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <p className="uppercase font-semibold py-2">{c.category}</p>
              <img src={c.image} className="rounded-xl" />
            </Link>
          ))}
        </div>
      </div>
      {/* Category end */}
      <h3 className="text-black font-semibold rounded-xl bg-gray-200 text-2xl w-fit px-5 py-2 ml-5">
        Collaborated Brand
      </h3>
      <div className="w-auto m-auto overflow-hidden relative my-10 ">
        <div className="animate-autoScroll flex justify-evenly w-scrollWidth border-y-8 bg-gray-100">
          {brandLogo.map((b, index) => (
            <div key={index} className=" w-auto h-auto py-20 px-20 ">
              <img src={b} className=" h-[130px] w-[160px]  object-center" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;

// body {
//   alignitem: center;
//   justify content: center;
// }

// @keyframes scroll {
//   0% {
//     transfrom : translateX(0);
//   }
//   100% {
//     transform : translateX(calc(-250px * 7))
//   }
// }
// .slider {
//   h: 100px;
//   m-auto;
//   overflow-hidden;
//   relqtive;
//   w-auto;
// }

// .slider .slide-track {
//   animation: scroll 40s linear infinite
//   flex;
//   w: call(250px * 14)
// }
// .slider slide {
//   h: 100px;
//   w:250px;
// }
