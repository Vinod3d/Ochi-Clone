import { useEffect, useState } from 'react'
import OchiBG from '../assets/images/Ochi-bg.jpg'


const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX,) * (180/Math.PI);
      setRotate(angle)
    })
  })

  return (
    <div  className="eyes w-full h-screen overflow-hidden">
        <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${OchiBG})` }}>
          <div className="absolute w-1/3 h-96 flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div data-scroll data-scroll-speed="-.3" className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
              <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate - 180}deg)`}} className="w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line">
                  <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                </div>
              </div>
            </div>
            <div data-scroll data-scroll-speed="-.3" className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
              <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                  <div style={{transform: `translate(-50%, -50%) rotate(${rotate -180}deg)`}} className="w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line">
                    <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                  </div>
                </div> 
              </div>
          </div>
        </div>
    </div>
  )
}

export default Eyes