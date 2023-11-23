import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import CreditCard from './components/CreditCard/CreditCard'

function App() {

  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("Mary Smith")

  const handleCardNumberUpdate = (event) =>{
    const maxLength = 16;

    const newCardNumber = event.target.value
                          .replace(/[^0-9]/g, '')
                          .slice(0, maxLength);

    if (newCardNumber == ""){
      setCardNumber("0000 0000 0000 0000")
    }else{
      const formattedCardNumber = formatCardNumber(newCardNumber);
      setCardNumber(formattedCardNumber);
    }
  }

  function formatCardNumber(input){
    const strippedInput = input.replace(/\s/g, '');
    const spacedInput = strippedInput.replace(/(.{4})/g, '$1 ');
    const finalInput = spacedInput.trim();
    return finalInput;
  }

  const handleNameUpdate = (event) =>{
    const newName = event.target.value;
    if (newName == ""){
      setName("Mary Smith")
    }else{
      setName(newName);
    }
  }

  return (
    
    <div className='container-fluid' style={{height: '100vh'}}>
      <div className='row vh-100'>
        <div className='card-col col-xs-12 col-sm-12 col-md-4 position-relative'>
          <CreditCard cardNumber={cardNumber} name={name}></CreditCard>
        </div>
        <div className='form-col col-xs-12 col-sm-12 col-md-8'>
          
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <input onChange={handleCardNumberUpdate} value={cardNumber === "0000 0000 0000 0000" ? "" : cardNumber}  className="form-control" id="cardNumber" placeholder="e.g. 1234 5678 9123 0000"/>
            </div>

            <div className="form-group">
              <label htmlFor="cardholderName">CARDHOLDER NAME</label>
              <input onChange={handleNameUpdate} type="name" className="form-control" id="cardholderName" placeholder="e.g. Mary Smith"/>
            </div>

          </form>
        </div>
      </div>

      


    </div>
    
  )
}

export default App
