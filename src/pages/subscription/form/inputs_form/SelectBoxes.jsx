import boxFrida from '../../../../assets/images/box_frida_1.png'
import boxCatrina from '../../../../assets/images/box_catrina_1.png'

const SelectBoxes = ({isFrida, isCatrina, handleCatrina, handleFrida, handleNextStep}) => {
  return (
    <>
      <div className="md:col-span-3 justify-center">
        <div className={`${ isFrida ? 'border-solid border-4 border-pink rounded-lg p-3' : 'p-5'}`} onClick={handleFrida}>
          <img src={boxFrida} alt="boxFrida" />
          <p className="font-bold text-pink text-center">
            {isFrida ? "Box Frida" : ""}
          </p>
        </div>
      </div>

      <div className="md:col-span-3 justify-center">
        <div className={`${ isCatrina ? 'border-solid border-4 border-black rounded-lg p-3' : 'p-5'}`} onClick={handleCatrina}>
          <img src={boxCatrina} alt="boxCatrina" />
          <p className="font-bold text-black text-center">
            {isCatrina ? "Box Catrina" : ""}
          </p>
        </div>
      </div>

      <div className="md:col-span-6 text-right">
        <div className="inline-flex items-end mt-4">
          <button onClick={handleNextStep} className="bg-pink hover:bg-white text-white hover:text-pink font-bold py-3 px-5 rounded-lg">
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}

export default SelectBoxes;