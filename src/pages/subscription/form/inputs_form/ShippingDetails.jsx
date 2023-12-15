const ShippingDetails = ({handleNextStep, handlePrevStep, name, adressLineOne, adressLineTwo, state, city, zipCode, setName, setAdressLineOne, setAdressLineTwo, setState, setCity, setZipCode }) => {
  return (
    <>
      <div className="md:col-span-6">
        <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            name="name"
            id="name"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Introduce tu nombre completo"
          />
        </div>

        <div className="md:col-span-4 mt-3">
        <label htmlFor="adress_line_1">Adress Line 1</label>
          <input
            type="text"
            name="adress_line_1"
            id="adress_line_1"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={adressLineOne}
            onChange={(e) => setAdressLineOne(e.target.value)}
            placeholder="(e.g., street, PO Box, or company name)"
          />
        </div>

        <div className="md:col-span-2 mt-3">
        <label htmlFor="adress_line_2">Adress Line 2</label>
          <input
            type="text"
            name="adress_line_2"
            id="adress_line_2"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={adressLineTwo}
            onChange={(e) => setAdressLineTwo(e.target.value)}
            placeholder="(e.g., apartment, suite, unit, or building)"
          />
        </div>

        <div className="md:col-span-2 mt-3">
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Introduce el estado"
          />
        </div>

        <div className="md:col-span-3 mt-3">
        <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Introduce la ciudad"
          />
        </div>

        <div className="md:col-span-1 mt-3">
          <label htmlFor="zip_code">Zip Code</label>
            <input
              type="number"
              name="zip_code"
              id="zip_code"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Zipcode"
            />
        </div>

        <div className="md:col-span-6 text-right">
          <div className="inline-flex items-end gap-4 mt-5">
            <button onClick={handlePrevStep} className="bg-pink hover:bg-white text-white hover:text-pink font-bold py-3 px-5 rounded-lg">
              Atras
            </button>
            <button onClick={handleNextStep} className="bg-pink hover:bg-white text-white hover:text-pink font-bold py-3 px-5 rounded-lg">
              Siguiente
            </button>
          </div>
      </div>
    </>
  )
}

export default ShippingDetails;