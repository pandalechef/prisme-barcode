import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Result from "./Result";
import Scanner from "./Scanner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { scanning: false, results: [] };
    this._scan = this._scan.bind(this);
    this._onDetected = this._onDetected.bind(this);
  }

  _scan() {
    this.setState({ scanning: !this.state.scanning });
  }

  _onDetected(result) {
    this.setState({ results: [...this.state.results, result[0]] });
  }

  render() {
    console.log("results: ", this.state.results);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lecteur code-barre</h1>
        </header>
        <div>
          <button onClick={this._scan}>
            {this.state.scanning ? "Stop" : "Start"}
          </button>
          <ul className="results">
            {this.state.results.map(result => (
              <Result key={result.codeResult.code} result={result} />
            ))}
          </ul>
          {this.state.scanning ? (
            <Scanner onDetected={this._onDetected} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
