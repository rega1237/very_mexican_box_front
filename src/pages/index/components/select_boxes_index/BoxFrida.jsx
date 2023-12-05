import { useEffect, useRef, useState } from 'react';
import box_frida_one from '../../../../assets/images/box_frida_1.png';
import box_frida_two from '../../../../assets/images/box_frida_2.png';
import box_frida_three from '../../../../assets/images/box_frida_3.png';

const BoxFrida = () => {
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 } // You can adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={sectionRef} className='mt-[-70px] hidden lg:block'>
        <div className={`flex items-center mt-[-70px] pb-[2rem]  ${isIntersecting ? 'animate-slide-up' : ''}`}>
          <div>
            <img className='w-4/5 mx-auto' src={box_frida_one} alt="" />
          </div>
          <div>
            <img className='w-4/5 mx-auto' src={box_frida_two} alt="" />
          </div>
          <div>
            <img className='w-4/5 mx-auto' src={box_frida_three} alt="" />
          </div>
        </div>
      </div>

      <div className="wrapper pb-5 mt-[-70px] lg:hidden">
        <img className='w-[80%]' src={box_frida_one} alt="" />
        <img className='w-[80%]' src={box_frida_two} alt="" />
        <img className='w-[80%]' src={box_frida_three} alt="" />
      </div>
    </>
  );
}

export default BoxFrida;