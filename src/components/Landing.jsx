import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const Landing = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.7" className="w-full h-screen relative bg-zinc-900 pt-1">
      <div className="mt-40 px-4 md:px-10 lg:px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center justify-center gap-3">
                {index === 1 && (
                  <motion.div 
                    initial={{width: 0}}
                    animate={{width: "9vw"}}
                    transition={{ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.6}}
                    className="w-[20vw] h-[10vw] md:w-[15vw] md:h-[7vw] lg:w-[9vw] lg:h-[4.8vw] mt-3 bg-red-400"
                  >

                  </motion.div>
                )}
                <h1 className="uppercase text-[15vw] md:text-[10vw] lg:text-[7.5vw] font2 leading-[0.8]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-32 flex flex-col md:flex-row justify-between items-center py-5 px-4 md:px-10 lg:px-20 gap-4 md:gap-0">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p
            key={index}
            className="text-base md:text-lg font1 font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center text-base md:text-lg font1 gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-light rounded-full capitalize">
            start the project
          </div>
          <div className="w-10 h-10 flex justify-center items-center border-[2px] border-zinc-500 rounded-full">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
