import React, { Component } from "react";
import QrReader from "react-qr-reader";
import QRCode from "react-google-qrcode";
import Switch from "./components/Switch";

import "./App.css";

export default class App extends Component {
  state = {
    selectedTool: "generator",
    result: "No result",
    generatorData: "https://qrcode-pwa.netlify.com"
  };

  handleScan = data => {
    if (data) {
      this.setState({ result: data });
    }
  };

  handleError = err => {
    console.error(err);
  };

  handleInputChange = event => {
    const inputValue = event.target.value;

    this.setState({ generatorData: inputValue });
  };

  handleSwitch = () => {
    const { selectedTool } = this.state;

    if (selectedTool === "generator") {
      this.setState({ selectedTool: "reader" });
    } else if (selectedTool === "reader") {
      this.setState({ selectedTool: "generator" });
    }
  };

  render() {
    const { selectedTool, result, generatorData } = this.state;

    const qrReader = (
      <div className="qr-reader">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p>{result}</p>
      </div>
    );

    const qrGenerator = (
      <div className="qr-generator">
        <QRCode data={generatorData} size={240} framed />
        <p />
        <input
          type="text"
          onChange={this.handleInputChange}
          value={generatorData}
        />
      </div>
    );

    return (
      <div className="App">
        <h1>QR code PWA</h1>
        {selectedTool === "reader" ? qrReader : qrGenerator}
        <Switch changed={this.handleSwitch} />
      </div>
    );
  }
}
