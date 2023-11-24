import 'bootstrap/dist/css/bootstrap.min.css'
import './CreditCard.css'

const CreditCard = ({ cardNumber, name, expirationDate }) =>{
    return(
        <>
        <div className='container-fluid credit-card'>
            <div className='row logo-row'>
                <div className='col-12'>
                </div>
            </div>
            <div className='row card-number-row'>
                <div className='col-12'>
                    {cardNumber}
                </div>
            </div>
            <div className='row name-row'>
                <div className='col-8'>
                    {name}
                </div>
                <div className='col-4'>
                    {expirationDate}
                </div>
            </div>
        </div>

        </>
    )
}

export default CreditCard