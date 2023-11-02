import { useEffect, useRef, useState } from 'react';

const ExchangeRate = ({ currency, rate }) => {
  //const [prev, setPrev] = useState(rate) //vyvola rovnou prekresleni

  const prevRate = useRef(); //vydrzi i prekresleni, do teto promenne is ulozim aktualni hodnotu

  // provede se az po vykresleni komponenty
  useEffect(() => {
    prevRate.current = rate
  }, [rate])

  return (
    <div>
      Průběžný kurz {currency}: {rate.toFixed(2)}
      {prevRate.current < rate ? ' ⇑' : ' ⇓'}
    </div>
  )
};

export default ExchangeRate;