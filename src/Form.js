import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';


const Form = () => {
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
            {/* <span className="close-btn"></span>
            <div className="form-content-left">
                <img src="img/img-1.png" alt="lamar jackson in Ravens' home team jersey" className="form-img"/>
            </div> */}
        {!isSubmitted ? (<FormSignup submitForm={submitForm}/>) : (<FormSuccess /> )}
        </div>
        </>
    )
}


export default Form
