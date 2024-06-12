import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed="" className="w-full relative py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap font2 uppercase overflow-hidden">
        {["We are Ochi", "We are Ochi", "We are Ochi"].map((item, index) => (
          <motion.div
            className="flex"
            key={index}
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              ease: 'linear',
              duration: 10,
              repeat: Infinity,
            }}
          >
            <motion.h1
              className="text-[14vw] leading-none"
            >
             &nbsp; {item}
            </motion.h1>
            
            <motion.h1
              className="text-[14vw] leading-none"
            >
            &nbsp;{item}
            </motion.h1>

            <motion.h1
              className="text-[14vw] leading-none"
            >
             &nbsp; {item}
            </motion.h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
