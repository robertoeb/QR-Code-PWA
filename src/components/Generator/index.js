import React from "react";

const Generator = props => (
  <div className="qr-generator">
    <img
      src={`https://chart.googleapis.com/chart?chs=280x280&choe=UTF-8&chld=M|0&cht=qr&chl=${
        props.generatorData
      }`}
      alt="QR Code"
    />
    <input
      type="text"
      onChange={props.handleInputChange}
      value={props.generatorData}
    />
  </div>
);

export default Generator;
