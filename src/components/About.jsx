
const About = () => {
  return (
    <div className="w-full relative p-10 lg:p-20 max-md:p-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="font1 text-[2.8vw]  max-md:text-[4.8vw]  w-[85%] leading-[1.1] ">
            Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>

        <div className="w-full border-t-[1px] mt-20 py-10 max-md:py-5 border-[#a1b562] flex max-lg:flex-col justify-between">
            <div className="w-1/2 font1 flex flex-col gap-4 pb-7">
                <h1 className="text-[5vw]">Our approach :</h1>
                <button className="px-8 py-4 flex gap-8 items-center w-fit bg-zinc-900 rounded-full text-white">Read More
                    <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
                </button>
            </div>

            <div className="w-full lg:w-1/2 max-lg:h-[65vh] lg:h-[70vh] rounded-3xl bg-[#b0c859] mt-4 lg:mt-0"></div>
        </div>
    </div>
  )
}

export default About