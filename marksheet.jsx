import React, { Component } from "react";

class ViewMarksheet extends Component {
  render() {
    const { response } = this.props;
    return (
      <div>
        {response.map((m, index) => (
          <div className={this.background(m.ans)}>
            {index + 1 + "." + m.ans}
          </div>
        ))}
      </div>
    );
  }
  background(chk) {
    if (chk) {
      return "btn btn-dark m-2";
    } else {
      return "btn btn-warning m-2";
    }
  }
}

export default ViewMarksheet;
