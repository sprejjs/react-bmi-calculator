import React, {Fragment, useState} from 'react'
import FormInput from './FormInput';

const BmiCalculator = () => {
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [unit, setUnit] = useState('');

  const onChangeInput = (input) => {}
  const onSelectTag = event => {
    setUnit(event.target.value)

    if (event.target.value === 'Metric') {
      setHeightUnit('cm')
      setWeightUnit('kg')
    } else {
      setHeightUnit('ft')
      setWeightUnit('pt')
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
                <option value="Imperial">Imeprial</option>
              </select>
            </div>
          </div>
          <FormInput
            type="text"
            name="heightCount"
            title={`Height (${heightUnit})`}
            value=""
            onChange={onChangeInput}
          />
          {
            unit === 'Imperial' ?
              <FormInput
                type="text"
                name="inchesCount"
                title={` (in)`}
                value=""
                onChange={onChangeInput}
              /> : ''
          }
          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (${weightUnit})`}
            value=""
            onChange={onChangeInput}
          />
        </div>

        <button className="button" type="submit">
          Reset
        </button>
      </div>
    </Fragment>
  )
}

export default BmiCalculator;
