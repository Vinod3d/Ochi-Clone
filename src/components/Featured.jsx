import { motion } from "framer-motion"
import { useState } from "react"

const Featured = () => {
    const [isHovering, setHovering] = useState(false);
    const [isHovering2, setHovering2] = useState(false);


  return (
    <div className="w-full p-10 lg:p-20">
        <div className="w-full border-b-[1px] border-zinc-700 pb-20">
            <h1 className="text-[5vw] font1 tracked-tight">Featured Projects</h1>
        </div>

        <div className="cards w-full flex max-lg:flex-col gap-10 mt-10">
            <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className="cardcontainer relative w-1/2 max-lg:w-full h-[75vh] rounded-xl ">
                <h1 className="absolute flex left-full -translate-x-1/2 max-lg:hidden -translate-y-1/2 overflow-hidden z-[9] leading-none top-1/2 font2 text-8xl text-[#CDEA68]">
                {"FYDE".split("").map((item, index)=>(
                    <motion.span 
                    initial={{y: "100%"}}  
                    animate={isHovering ? ({y: "0"}) : ({y:"100%"})} 
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}}
                    key={index}
                    className="inline-block translate-y-full">{item}</motion.span>
                ))}
                </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img 
                        src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" 
                        alt="" 
                        className="w-full h-full bg-cover"
                    />
                </div>
            </div>
            <div onMouseEnter={()=>setHovering2(true)} onMouseLeave={()=>setHovering2(false)} className="cardcontainer relative w-1/2 max-lg:w-full h-[75 vh] rounded-xl ">
                <h1 className="absolute flex right-full translate-x-1/2 -translate-y-1/2 max-lg:hidden  overflow-hidden z-[9] leading-none top-1/2 font2 text-8xl text-[#CDEA68]">
                    {"VISE".split("").map((item, index)=>(
                        <motion.span 
                        key={index}
                        initial={{y: "100%"}}  
                        animate={isHovering2 ? ({y: "0"}) : ({y:"100%"})} 
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}}
                        className="inline-block translate-y-full"
                        >{item}</motion.span>
                    ))}
                </h1>
                <div className="card w-full h-full bg-red-200 rounded-xl overflow-hidden">
                    <img 
                        src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" 
                        alt="" 
                        className="w-full h-full bg-cover"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured