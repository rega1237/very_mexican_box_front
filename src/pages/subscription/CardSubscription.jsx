import "./Subscription.css"
import logo from "../../assets/images/thumbnail_logo.png"
const CardSubscription = ({title, price}) => {
  return (
    <div className="backdrop_filter flex flex-col bg-backgroundCard w-[359px] mt-[50px] py-[30px] justify-center items-start">
      <div className="w-[80%] mx-auto">
        <h1 className="font-bold text-[20px]">{title}</h1>
        <h3>Membresia</h3>
      
        <div>
          <h2 className="font-bold text-[30px]">{`$ ${price}`} <span className="font-normal text-[15px]">/ una caja</span></h2>
        </div>

        <div className="white_line"></div>

        <div className="flex flex-col">
          <ul className="flex flex-col gap-3 pt-6">
            <li className="flex gap-2"><span><img className="w-[20px] h[20px]" src={logo} /></span>Caja Frida ó Catrina</li>
            <li className="flex gap-2"><span><img className="w-[20px] h[20px]" src={logo} /></span>10 dulces variados</li>
            <li className="flex gap-2"><span><img className="w-[20px] h[20px]" src={logo} /></span>1 playera con logo tridimencional</li>
            <li className="flex gap-2"><span><img className="w-[20px] h[20px]" src={logo} /></span>Mas descripción</li>
            <li className="flex gap-2"><span><img className="w-[20px] h[20px]" src={logo} /></span>Mas descripción</li>
          </ul>
        </div>

        <div className="mt-[30px]">
          <button className="bg-pink w-full py-[10px] rounded-2xl font-semibold hover:bg-white hover:text-pink">SUSCRIBIRME</button>
        </div>
      </div>


      
    </div>
  );
}

export default CardSubscription;