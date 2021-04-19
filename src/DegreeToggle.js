import React from 'react';

const DegreeToggle = props => {
  return (
   <>
    <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="celsius"
        value="metric"
        />
        <label className="form-check-label" for="celsius">Celsius</label>
      </div>
      <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="farenheit"
        value="imperial"
        />
        <label className="form-check-label" for="farenheit">Farenheit</label>
      </div>
    </>
  )
}

export default DegreeToggle;