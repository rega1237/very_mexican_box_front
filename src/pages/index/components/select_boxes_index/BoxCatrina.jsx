import box_catrina_one from '../../../../assets/images/box_catrina_1.png';
import box_catrina_two from '../../../../assets/images/box_catrina_2.png';
import box_catrina_three from '../../../../assets/images/box_catrina_3.png';

const BoxCatrina = () => {
  return (
    <section>
      <div className='mt-[-70px] hidden lg:block'>
        <div className="flex items-center mt-[-70px] pb-[2rem] animate-slide-up">
          <div>
            <img className='w-4/5 mx-auto' src={box_catrina_one} alt="" />
          </div>
          <div>
            <img className='w-4/5 mx-auto' src={box_catrina_two} alt="" />
          </div>
          <div>
            <img className='w-4/5 mx-auto' src={box_catrina_three} alt="" />
          </div>
        </div>
      </div>

      <div className="wrapper mt-[-70px] lg:hidden">
        <img className='w-[80%]' src={box_catrina_one} alt="" />
        <img className='w-[80%]' src={box_catrina_two} alt="" />
        <img className='w-[80%]' src={box_catrina_three} alt="" />
      </div>
    </ section>
  );
};

export default BoxCatrina;