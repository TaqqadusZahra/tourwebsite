// import homeImage from "../assets/Gilgit.jpg";

// export default function Hero() {
//   return (
//     <div id="hero" className="relative  z-0 mt-8 w-full h-full max-w-[90%] mx-auto">
//       {/* Background Image with Overlay */}
//       <div className="relative h-full">
//         <img
//           src={homeImage}
//           alt="Hero"
//           className="w-full h-[560px] md:h-[500px] lg:h-[600px] rounded-md object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center gap-4 z-10 px-4 md:px-10">
//         <div className="text-white">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide">
//             TRAVEL TO EXPLORE
//           </h1>
//           <p className="my-7 text-sm md:text-md lg:text-lg px-4 md:px-20 lg:px-48">
//             From mesmerizing natural wonders to vibrant cityscapes, we curate exceptional travel experiences that cater to every explorer. Discover new destinations, immerse yourself in diverse cultures, and create unforgettable memories with us.
//           </p>
//         </div>

//         {/* Booking Form */}
//         <div className="bg-white opacity-90 p-4 rounded-md flex flex-col md:flex-row gap-4 items-center w-full max-w-4xl z-20">
//           {/* Destination */}
//           <div className="flex flex-col w-full md:w-1/4">
//             <label className="text-blue-900 text-lg">Where you want to go</label>
//             <input
//               type="text"
//               placeholder="Search Your location"
//               className="text-center border border-gray-300 placeholder:text-grey-700 rounded-md px-2 py-1 w-full focus:outline-blue-500"
//             />
//           </div>

//           {/* Dates and Button */}
//           <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/4">
//             {/* Check-in */}
//             <div className="flex flex-col w-full md:w-1/3">
//               <label className="text-blue-900 text-lg">Check-in</label>
//               <input
//                 type="date"
//                 className="text-center border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-blue-500"
//               />
//             </div>
//             {/* Check-out */}
//             <div className="flex flex-col w-full md:w-1/3">
//               <label className="text-blue-900 text-lg">Check-out</label>
//               <input
//                 type="date"
//                 className="text-center border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-blue-500"
//               />
//             </div>
//             {/* Button */}
//             <div className="w-full md:w-1/3 flex justify-center md:justify-end">
//               <button className="bg-blue-600 text-white py-2 px-4 rounded-md uppercase text-lg transition duration-300 hover:bg-blue-900 w-full md:w-auto">
//                 Explore Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import homeImage1 from "../assets/Gilgit.jpg";
import homeImage2 from "../assets/Hero2.png";
import homeImage3 from "../assets/Hero3.png";

const words = ["Travel", "Discover", "Experience", "Adventure"];
const images = [homeImage1, homeImage2, homeImage3];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative z-0 mt-8 w-full h-full max-w-[90%] mx-auto">
      {/* Background Image with Overlay */}
      <div className="relative h-full">
        <img
          src={images[imgIndex]}
          alt="Hero"
          className="w-full h-[560px] md:h-[500px] lg:h-[600px] rounded-md object-fill transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center gap-4 z-10 px-4 md:px-10">
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide">
            It's Time to{" "}
            <motion.span
              key={index}
              className="text-[#FAB12F]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
            >
              {words[index]}
            </motion.span>{" "}
            Gilgit Baltistan
          </h1>
          <p className="my-7 text-sm md:text-md lg:text-lg px-4 md:px-20 lg:px-48">
            From mesmerizing natural wonders to vibrant cityscapes, we curate exceptional travel experiences that cater to every explorer.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white opacity-90 p-4 rounded-md flex flex-col md:flex-row gap-4 items-center w-full max-w-4xl z-20">
          {/* Destination */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-blue-900 text-lg">Where you want to go</label>
            <input
              type="text"
              placeholder="Search Your location"
              className="text-center border border-gray-300 placeholder:text-grey-700 rounded-md px-2 py-1 w-full focus:outline-blue-500"
            />
          </div>

          {/* Dates and Button */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/4">
            {/* Check-in */}
            <div className="flex flex-col w-full md:w-1/3">
              <label className="text-blue-900 text-lg">Check-in</label>
              <input
                type="date"
                className="text-center border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-blue-500"
              />
            </div>
            {/* Check-out */}
            <div className="flex flex-col w-full md:w-1/3">
              <label className="text-blue-900 text-lg">Check-out</label>
              <input
                type="date"
                className="text-center border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-blue-500"
              />
            </div>
            {/* Button */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md uppercase text-lg transition duration-300 hover:bg-blue-900 w-full md:w-auto">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
