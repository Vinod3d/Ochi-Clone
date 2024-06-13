import { useEffect, useState } from 'react';
import OchiBG from '../assets/images/Ochi-bg.jpg';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${OchiBG})` }}
      >
        <div className="absolute w-full max-w-xl flex gap-4 lg:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
          <div
            data-scroll
            data-scroll-speed="-.3"
            className="w-[20vw] lg:w-[15vw] h-[20vw] lg:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100"
          >
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate - 180}deg)` }}
                className="w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.3"
            className="w-[20vw] lg:w-[15vw] h-[20vw] lg:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100"
          >
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate - 180}deg)` }}
                className="w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
