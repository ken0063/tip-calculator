import React from 'react';

const percentage = ['5%', '10%', '15%', '25%', '50%'];

const CalContainer = () => {
  return (
    <div className="cal-container">
      <div className="input">
        <label>
          <p> Bill</p>
          <input id="person" />
        </label>
      </div>
      <div className="percentage-container">
        {percentage.map((per) => {
          <button type="button">{per}</button>;
        })}
      </div>
      <div className="input">
        <label>
          <p> Number of people</p>
          <input id="dollars" />
        </label>
      </div>
      {percentage.map((per) => {
        <div>{per}</div>;
      })}
      <div></div>
    </div>
  );
};

export default CalContainer;
