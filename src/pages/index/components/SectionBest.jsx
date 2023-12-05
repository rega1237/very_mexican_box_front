import chocoBird from '../../../assets/images/choco_bird_index.png'

const SectionBest = () => {
  return (
    <section className="flex bg-pink gap-3">
      <div className='hidden lg:block ml-[-20px] w-[60%]'>
        <img src={chocoBird} alt="" />
      </div>
      <div className='mt-9 text-center text-white self-center pb-4 lg:pb-0 lg:text-right lg:w-[40%]'>
        <div className='w-[80%] mx-auto lg:mx-0 lg:pb-4'>
          <h3 className='font-extrabold text-[1.5rem] lg:text-[2rem] w-full pb-4'>LOS MEJORES <br /> DULCES MEXICANOS</h3>
          <p className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh augue, faucibus gravida imperdiet non, maximus fermentum tellus. Nulla in augue lobortis, posuere odio a, imperdiet urna.</p>
          <p className='pb-3'>Maecenas eu tellus eu felis ullamcorper aliquam at eu lorem. Sed rhoncus massa mi, viverra tincidunt orci viverra eget. In sodales sem eget laoreet pharetra. Nam finibus odio eget magna blandit cursus.</p>
          <p className='pb-3'>Maecenas eu tellus eu felis ullamcorper aliquam at eu lorem. Sed rhoncus massa mi, viverra tincidunt orci viverra eget. In sodales sem eget laoreet pharetra.</p>
        </div>
      </div>
    </section>
  )
}

export default SectionBest