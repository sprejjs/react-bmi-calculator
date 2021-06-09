import React, {Fragment, useState} from 'react';
import BmiCalculator from './BmiCalculator';

const Bmi = () => {
  const [bmi, setBmi] = useState("0");

  const getBmiClass = bmi => {
    if (bmi >= 1 && bmi <= 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal Weight';
    if (bmi >= 24.9 && bmi <= 29.9) return 'Overweight';
    if (bmi >= 30) return  'Obese';
  }
  const getBackgroundColor = bmi => {
    if (bmi >= 1 && bmi <= 18.5) return '#FED88B';
    if (bmi >= 18.5 && bmi <= 24.9) return '#80ff80';
    if (bmi >= 24.9 && bmi <= 29.9) return '#FF7F50';
    if (bmi >= 30) return  '#FF5411';
  }

  const bmiCategory = getBmiClass(bmi)
  let bmiClass = (bmi > 0 && bmiCategory) ? bmiCategory.split(' ')[0].toLowerCase() : '';
  const backgroundColor = getBackgroundColor(bmi);

  return (
    <Fragment>
      <div className="calculator" style={{
        backgroundColor
      }}>
        <h3> Body Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className="bmi-result">
            <div className="bmi-result-number">
              Body Mass Index (BMI) = {bmi}
            </div>
            <div className={bmiClass}>
              {bmiCategory}
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
