import React from "react";
import "./styles.css";

const Switch = props => (
  <div className="Switch">
    <p id="generator-text">Gerador</p>
    <label class="switch">
      <input type="checkbox" onChange={props.changed} />
      <span class="slider round" />
    </label>
    <p id="reader-text">Leitor</p>
  </div>
);

export default Switch;
