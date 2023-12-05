import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import BoxFrida from "./components/select_boxes_index/BoxFrida";
import SectionBest from "./components/SectionBest";
import SubscriptionCta from "./components/SubscriptionCta";
import TshirtsCta from "./components/TshirtsCta";
import BoxCatrina from "./components/select_boxes_index/BoxCatrina";

const Index = () => {
  const [boxFrida, setBoxFrida] = useState(true);
  const [boxCatrina, setBoxCatrina] = useState(false);

  const handleBoxFrida = () => {
    setBoxFrida(true);
    setBoxCatrina(false);
  }

  const handleBoxCatrina = () => {
    setBoxFrida(false);
    setBoxCatrina(true);
  }

  return (
    <>
      <Header />
      <div className="flex justify-around pt-[60px] font-montse text-lg pb-5">
        <h3 onClick={handleBoxFrida} className={`${boxFrida ? "font-extrabold" : ""} text-pink cursor-pointer`}>BOX FRIDA</h3>
        <h3 onClick={handleBoxCatrina} className={`${boxCatrina ? "font-extrabold" : ""} cursor-pointer`}>BOX CATRINA</h3>
      </div> 
      <div className={`${boxFrida ? "" : "hidden"} overflow-hidden`}>
        <div className='pink_rectangle'></div>
        <BoxFrida />
      </div>
      <div className={`${boxCatrina ? "" : "hidden"} overflow-hidden`}>
        <div className='black_rectangle'></div>
        <BoxCatrina />
      </div>
      <SectionBest />
      <div className="py-6"></div>
      <SubscriptionCta />
      <TshirtsCta />
    </>
  );
}

export default Index;