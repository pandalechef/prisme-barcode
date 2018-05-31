import React from "react";

export default class Result extends React.Component {
  render() {
    const { resultat, nombre } = this.props.result;

    if (!resultat) {
      return null;
    }
    return (
      <tr>
        <td>{resultat.codeResult.code}</td>
        <td>{nombre}</td>
      </tr>
    );
  }
}
