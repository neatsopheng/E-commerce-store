import { useEffect, useState } from "react";
import "../App.css";
import img1 from "../assets/bgIMG_1.jpg";
import img2 from "../assets/bgIMG_2.jpg";
import img3 from "../assets/bgIMG_3.jpg";
import { Link } from "react-router-dom";
import { useReadCate } from "../lib/supabase/CRUD";
import NavbarHome from "./Navbar/NavbarHome";
import Footer from "./Footer";

function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const {data: category} = useReadCate();
  const bg_img = [img1, img2, img3];

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextImg();
    }, 6000);
    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  // const prevImg = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? bg_img.length - 1 : prev - 1
  //   )
  // }
  const nextImg = () => {
    setCurrentIndex((prev) => (prev === bg_img.length - 1 ? 0 : prev + 1));
  };
  console.log(currentIndex);
  return (
    <>
    <NavbarHome/>
    <div
      className="mt-4 max-w-[1400px] h-[568px] bg-teal-800
    w-full m-auto py-0  relative
    "
    >
      {/* hero image start */}
      <div
        style={{ backgroundImage: `url(${bg_img[currentIndex]})` }}
        className="w-full h-full bg-cover bg-center relative transition duration-75"
      >
        <div className="flex flex-col w-full h-full text-white justify-center  items-center backdrop-brightness-50 ">
          <h3 className="text-2xl md:text-3xl font-bold">
            NEW STUFF
            <span> JUST DROPPED</span>
          </h3>
          <p className="text-xl md:text-2xl">Shop your favorite stuff now!!</p>
          <div className="flex flex-row gap-5 my-5">
            <Link to={'products'} className="bg-white px-7 py-3   shadow-2xl rounded-full text-xl text-black font-semibold flex items-center justify-center hover:bg-gray-200 font-">
              Shop now
            </Link>
          </div>
        </div>
      </div>
      {/*  hero image end */}
      {/* Category start */}
    </div>
      <div className="mt-5">
        <p className="text-black font-semibold rounded-xl bg-gray-200 text-2xl w-fit px-5 py-2 ml-5">Browse Category</p>
        <div className="flex flex-wrap justify-center gap-x-52 gap-y-5 my-5">
          {category?.map((c) =>
            <Link to={'/products'} key={c.id} className="backdrop-blur-xl backdrop-brightness-95 rounded-xl px-4 py-5 w-52"
            >
              <p className="uppercase font-semibold py-2">{c.category}</p>
              <img src={c.image} className="rounded-xl"/>
            </Link>
          )}
        </div>
      </div>
      {/* Category end */}
      <div>

      </div>
      <Footer />
    </>
  );
}

export default Homepage;
