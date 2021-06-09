import React, {Fragment, useState} from 'react';
import BmiCalculator from './BmiCalculator';

const Bmi = () => {
  const [bmi, setBmi] = useState("0");

  return (
    <Fragment>
      <div className="calculator">
        <h3> Body Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className="bmi-result">
            <div className="bmi-result-number">
              Body Mass Index (BMI) = {bmi}
            </div>
            <div className={`bmi-category`}>
              Underweight
            </div>
          </div>
        </div>

        <BmiCalculator
          bmi = {setBmi}
        />
      </div>
    </Fragment>
  )
}

export default Bmi;
