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
    const estNouveau = this.state.results.filter(
      r => r.resultat.codeResult.code === result[0].codeResult.code
    ).length === 0
      ? true
      : false;
    if (estNouveau) {
      this.setState({
        results: [...this.state.results, { resultat: result[0], nombre: 1 }]
      });
    } else {
      var nouveauResultats = [...this.state.results];
      nouveauResultats.forEach(r => {
        if (r.resultat.codeResult.code === result[0].codeResult.code) {
          r.nombre += 1;
        }
      });
      this.setState({
        results: nouveauResultats
      });
    }
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
          <table className="results">
            <thead>
              <tr>
                <th>Code barre</th>
                <th>Nombre de scan</th>
              </tr>
            </thead>
            <tbody>
              {this.state.results.map(r => (
                <Result key={r.resultat.codeResult.code} result={r} />
              ))}
            </tbody>
          </table>
          {this.state.scanning
            ? <Scanner onDetected={this._onDetected} />
            : null}
        </div>
      </div>
    );
  }
}

export default App;
