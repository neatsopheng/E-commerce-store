import { useEffect, useState } from "react"
import "../App.css"
import banner from "../assets/banner/pin_12.jpg"
import img1 from "../assets/bgIMG_1.jpg"
import img2 from "../assets/bgIMG_2.jpg"
import img3 from "../assets/bgIMG_3.jpg"

function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const bg_img = [img1, img2, img3];

  useEffect(() => {
    const autoPlay = setInterval(() => {
       nextImg();
      }, 6000)
      return () => clearInterval(autoPlay);
  }, [currentIndex])

  const prevImg = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? bg_img.length - 1 : prev - 1
    )
  }
  const nextImg = () => {
    setCurrentIndex((prev) => 
      prev === bg_img.length - 1 ? 0 :  prev + 1
    )
  }
  console.log(currentIndex)
  return (
    <div className="mt-4 max-w-[1400px] h-[568px] bg-teal-800
    w-full m-auto py-0  relative
    ">
      <div style={{backgroundImage: `url(${bg_img[currentIndex]})`}}
        className="w-full h-full bg-cover bg-center relative transition duration-75"
      >
        <div className="flex flex-col w-full h-full text-white justify-center  items-center backdrop-brightness-50 ">
          <h3 className="text-3xl font-bold">NEW STUFF 
            <span> JUST DROPPED</span>
          </h3>
          <p className="text-2xl">Shop your favorite stuff now!!</p>
          <div className="flex flex-row gap-5 my-5">
            <button className="bg-green-400 px-5 py-2 rounded-full text-black font-semibold">Shop Men</button>
            <button className="bg-green-400 px-5 py-2 rounded-full text-black font-semibold">Shop Women</button>
          </div>
        </div>
        

      </div>
    </div>
  );
}

export default Homepage;
