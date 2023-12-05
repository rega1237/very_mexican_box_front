import girlBox from '../../../assets/images/girl_with_box.png'

const SubscriptionCta = () => {
  return (
    <section className='flex flex-col bg-subs_cta_bg bg-cover pt-8 lg:pt-0 lg:flex-row'>
      <div className=' text-white lg:self-center lg:w-1/2'>
        <div className='text-center w-[90%] mx-auto lg:w-[60%] lg:text-left'>
          <h2 className='text-[1.5rem] lg:text-[2rem] font-bold'>SUBSCRIBETE YA!</h2>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh augue, faucibus gravida imperdiet non, maximus fermentum tellus. Nulla in augue lobortis, 
              posuere odio a, imperdiet urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh augue, faucibus gravida imperdiet non, maximus fermentum tellus. 
              Nulla in augue lobortis, posuere odio a, imperdiet urna.
            </p>
            <button
              type="button"
              className="lg:mt-12 lg:mb-0 inline-block my-8 rounded-full bg-white text-pink px-6 pb-2 pt-2.5 text-lg font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-pink hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] hover:text-white focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:text-pink dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              subscribir
            </button>
        </div>
      </div>  
        
      <div className='lg:w-1/2'>
        <img className='w-full' src={girlBox} alt="" />
      </div>
    </section>
  )
}

export default SubscriptionCta