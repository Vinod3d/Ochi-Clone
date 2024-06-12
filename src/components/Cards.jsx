import logo1 from '../assets/images/cl1.svg'
import logo2 from '../assets/images/cl2.svg'
import logo3 from '../assets/images/cl3.png'

const Cards = () => {
  return (
    <div className="w-full p-20 h-screen bg-zinc-100 flex gap-5 items-center">
        <div className="cardcontainer h-[50vh] w-1/2 rounded-xl overflow-hidden">
            <div className="card relative w-full flex justify-center items-center h-full bg-[#004D43]">
                <img className='w-32' src={logo1} alt="logo1" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy; 2019 - 2022</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
            <div className="card relative w-1/2 h-full flex justify-center items-center  bg-[#212121] rounded-xl overflow-hidden">
                <img className='w-32' src={logo2} alt="logo2" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy; 2019 - 2022</button>
            </div>
            <div className="card relative w-1/2 h-full flex justify-center items-center  bg-[#212121] rounded-xl overflow-hidden">
                <img className='w-32' src={logo3} alt="logo3" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy; 2019 - 2022</button>
            </div>
        </div>
    </div>
  )  
}

export default Cards