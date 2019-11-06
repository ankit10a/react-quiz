import React, { Component } from "react";

class ViewMarksheet extends Component {
  state = {};
  handleclass = opt => {
    return opt ? "btn btn-warning m-2" : "btn btn-secondary m-2";
  };
  handleResClass = res => {
    return res.response === ""
      ? " btn btn-warning m-2"
      : res.response === res.answer
      ? "btn btn-success m-2"
      : "btn btn-danger m-2";
  };
  render() {
    const { mode, responseCheck, responseSheet } = this.props;
    return (
      <div>
        {mode === "Check" ? (
          <div>
            {responseCheck.map((res, index) => (
              <button
                className={this.handleResClass(responseCheck[index])}
                onClick={() => this.props.gotoquestion(index)}
                key={index}
              >
                {index + 1} {"."}
                {res.showans}{" "}
              </button>
            ))}
          </div>
        ) : (
          <div>
            {responseSheet.map((n, index) => (
              <button
                className={this.handleclass(responseSheet[index].showans)}
                onClick={() => this.props.gotoquestion(index)}
                key={index}
              >
                {index + 1}
                {"."}
                {n.showans}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ViewMarksheet;
