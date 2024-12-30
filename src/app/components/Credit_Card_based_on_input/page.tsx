import React from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
type CardProps = {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
};


const Credit_Card_Based_on_input:React.FC <CardProps> = ({ number, expiry, cvc, name }) => {
  return (
    <div className='md:scale-75 lg:scale-90'>
        <Cards 
        number={number}
        expiry={expiry}
        cvc={cvc}
        name={name}
        
      
        
      />
      
    </div>
  )
}

export default Credit_Card_Based_on_input
