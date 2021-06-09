import React, {Fragment, useEffect, useState} from 'react'
import FormInput from './FormInput';
import PropTypes from 'prop-types';

const BmiCalculator = props => {
  const { bmi } = props;

  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [unit, setUnit] = useState('Metric');
  const [count, setCount] = useState({
    heightCount: '0',
    inchesCount: '0',
    weightCount: '0'
  });

  const { heightCount, inchesCount, weightCount } = count;

  useEffect(() => {
    if (unit === 'Metric') {
      bmi(metricBMI(heightCount, weightCount))
    } else {
      bmi(imperialBMI(heightCount, inchesCount, weightCount))
    }

  }, [heightCount, weightCount, inchesCount, bmi, unit])

  const metricBMI = (height, weight) => {
    if (height > 0 && weight > 0) {
      const heightMetre = height / 100
      const bmi = weight / (heightMetre * heightMetre)
      return Math.round(bmi * 100) / 100;
    }

    return 0
  }

  const imperialBMI = (height, inches, weight) => {
    if (height > 0 && weight > 0 && inches > 0) {
      const heightInInches = (height * 12) + parseInt(inches);
      const bmi = 703 * (weight / (heightInInches * heightInInches));
      return Math.round(bmi * 100) / 100;
    }

    return 0
  }

  const resetData = e => {
    e.preventDefault();

    setUnit('Metric');
    setCount({
      heightCount: '0',
      inchesCount: '0',
      weightCount: '0',
      bmi: '0'
    })
  }

  const onChangeInput = event => {
    const { name, value } = event.target;

    setCount(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  const onSelectTag = event => {
    setUnit(event.target.value)

    if (event.target.value === 'Metric') {
      setHeightUnit('cm')
      setWeightUnit('kg')
    } else {
      setHeightUnit('ft')
      setWeightUnit('lbs')
    }
  }

  return (
    <Fragment>
      <div className="bmi-inputs">
        <div className="input-fields">
          <div>
            <span className="label-unit">Unit</span>
            <div className="unit">
              <select
                name="unit"
                value={unit}
                onChange={onSelectTag}
                className="form-control form-control-sm"
              >
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>
          <FormInput
            type="text"
            name="heightCount"
            title={`Height (${heightUnit})`}
            value={heightCount}
            onChange={onChangeInput}
          />
          {
            unit === 'Imperial' ?
              <FormInput
                type="text"
                name="inchesCount"
                title={` (in)`}
                value={inchesCount}
                onChange={onChangeInput}
              /> : ''
          }
          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (${weightUnit})`}
            value={weightCount}
            onChange={onChangeInput}
          />
        </div>

        <button className="button" type="submit" onClick={resetData}>
          Reset
        </button>
      </div>
    </Fragment>
  )
}

BmiCalculator.propTypes = {
  bmi: PropTypes.func.isRequired
}

export default BmiCalculator;
