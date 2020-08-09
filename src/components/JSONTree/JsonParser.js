import React from "react";

class JSONParser extends React.PureComponent {
  render() {
    const { children, value } = this.props;

    let data = {};

    try {
      data = JSON.parse(value);
    } catch(err) {
      return <div className="invalid-json-error">{err.message}</div>;
    }

    return children({ data });
  }
}

export default JSONParser;
