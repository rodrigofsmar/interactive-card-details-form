import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import CreditCard from './components/CreditCard/CreditCard'

function App() {

  const defaultCardNumber = "0000 0000 0000 0000";
  const defaultName = "Mary Smith";
  const defaultExpirationDate = "09 / 23";

  const [cardNumber, setCardNumber] = useState(defaultCardNumber);
  const [name, setName] = useState(defaultName);
  const [expirationDate, setExpirationDate] = useState(defaultExpirationDate);

  const handleCardNumberUpdate = (event) =>{
    const maxLength = 16;
    const newCardNumber = event.target.value
                          .replace(/[^0-9]/g, '')
                          .slice(0, maxLength);

    if (newCardNumber == ""){
      setCardNumber(defaultCardNumber) //WHEN THE INPUT IS EMPTY, SET IT TO "0000 0000 0000 0000"
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
      setName(defaultName)
    }else{
      setName(newName);
    }
  }

  const handleExpirationDateUpdate = (event) =>{
    const newExpirationDate = event.target.value;
    if (newExpirationDate == ""){
      setExpirationDate(defaultExpirationDate)
    }else{
      setExpirationDate(newExpirationDate);
    }
  }

  return (
    
    <div className='container-fluid'>
      <div className='row vh-100'>
        <div className='card-col col-xs-12 col-sm-12 col-md-4 position-relative'>
          <CreditCard cardNumber={cardNumber} name={name} expirationDate={expirationDate}></CreditCard>
        </div>
        <div className='form-col col-xs-12 col-sm-12 col-md-8 my-auto'>
          <form className="needs-validation">
            <div className="form-group mb-3">
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <input onChange={handleCardNumberUpdate} value={cardNumber === defaultCardNumber ? "" : cardNumber}  className="form-control" id="cardNumber" placeholder="e.g. 1234 5678 9123 0000"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="cardholderName">CARDHOLDER NAME</label>
                <input onChange={handleNameUpdate} type="name" className="form-control" id="cardholderName" placeholder="e.g. Mary Smith" required/>
            </div>
            <div className="row mb-3">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label htmlFor='expirationDate' className="form-label">EXPIRATION DATE (MM/YY)</label>
                <input onChange={handleExpirationDateUpdate} value={expirationDate === defaultExpirationDate ? "" : expirationDate} type='text' className='form-control' id='expirationDate' placeholder='MM / YY' pattern="\d{2}/\d{2}" required></input>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <label className="form-label">CVC</label>
                <input type="text" className="form-control" id="expirationYear" placeholder="e.g. 123" pattern="\d{3}" maxLength="3" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default App
