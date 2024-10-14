//Task: Implement a class-based React component in TypeScript that converts temperatures between Fahrenheit and Celsius.
//Focus: Class components in React, TypeScript classes, and handling of state and props.

import React, { Component, ChangeEvent } from "react";

interface State {
  temperature: number;
  unit: "Celsius" | "Fahrenheit";
}

class TemperatureConverter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      temperature: 0,
      unit: "Celsius",
    };
  }

  // Handle input change
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ temperature: parseFloat(event.target.value) || 0 });
  };

  // Handle unit toggle
  toggleUnit = () => {
    const { unit, temperature } = this.state;
    const newUnit = unit === "Celsius" ? "Fahrenheit" : "Celsius";
    const convertedTemperature =
      unit === "Celsius"
        ? (temperature * 9) / 5 + 32
        : ((temperature - 32) * 5) / 9;
    this.setState({
      temperature: parseFloat(convertedTemperature.toFixed(2)),
      unit: newUnit,
    });
  };

  render() {
    const { temperature, unit } = this.state;
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Temperature Converter</h1>
        <input
          type="number"
          value={temperature}
          onChange={this.handleChange}
          style={{ marginRight: "10px" }}
        />
        <button onClick={this.toggleUnit}>
          Convert to {unit === "Celsius" ? "Fahrenheit" : "Celsius"}
        </button>
        <p>
          {temperature}° {unit}
        </p>
      </div>
    );
  }
}

export default TemperatureConverter;
