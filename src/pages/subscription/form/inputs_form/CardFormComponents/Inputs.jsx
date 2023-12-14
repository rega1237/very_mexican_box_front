const Inputs = ({ handlePrevStep, cardName, cardNumber, cardExpMonth, cardExpYear, cardCvc, setCardName, setCardNumber, setCardExpMonth, setCardExpYear, setCardCvc }) => {
  return (
    <>
      <div className="md:col-span-6">
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          maxLength="16"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          placeholder="Introduce el número de tarjeta"
        />
      </div>

      <div className="md:col-span-6">
        <input
          type="text"
          name="cardName"
          id="cardName"
          value={cardName}
          onChange={e => setCardName(e.target.value)}
          className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          placeholder="Introduce el nombre del titular"
        />
      </div>

      <div className="md:col-span-2">
        <select
          name="mes"
          id="mes"
          className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          value={cardExpMonth}
          onChange={e => setCardExpMonth(e.target.value)}
        >
          <option value="" disabled className="text-gray-400">Mes expiración</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <select
          name="año"
          id="año"
          className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          value={cardExpYear}
          onChange={e => setCardExpYear(e.target.value)}
        >
          <option value="" disabled className="text-gray-400">Año expiración</option>
          {Array(30).fill().map((_, i) => {
            const year = new Date().getFullYear() + i
            return <option key={i} value={year}>{year}</option> 
          })}
        </select>
      </div>

      <div className="md:col-span-2">
        <input
          type="text"
          name="cvc"
          id="cvc"
          className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          value={cardCvc}
          maxLength="3"
          placeholder="Introduce el CVC"
          onChange={e => setCardCvc(e.target.value)}
        />
      </div>

      <div className="md:col-span-6 text-right">
          <div className="inline-flex items-end gap-4 mt-5">
            <button onClick={handlePrevStep} className="bg-pink hover:bg-white text-white hover:text-pink font-bold py-3 px-5 rounded-lg">
              Atras
            </button>
            <button id='submit' type="submit" className="bg-pink hover:bg-white text-white hover:text-pink font-bold py-3 px-5 rounded-lg">
              Pagar
            </button>
          </div>
      </div>
    </>
  )
}

export default Inputs