import React, {Fragment, useEffect, useState} from 'react'
import FormInput from './FormInput';

const BmiCalculator = () => {
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
  }, [])

  const resetData = e => {
    e.preventDefault();

    setUnit('Metric');
    setCount({
      heightCount: '0',
      inchesCount: '0',
      weightCount: '0'
    })
  }

  const onChangeInput = event => {
    const { name, value } = event.target;

    setCount(prevState => ({
      ...prevState,
      [name]: value
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

export default BmiCalculator;
