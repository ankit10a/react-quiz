import React, { Component } from "react";

class ChooseAssigment extends Component {
  render() {
    const {
      quizdata,
      performance,
      handleAssignment,
      handleAssignmentCheck
    } = this.props;
    return (
      <div>
        <h1 className="text-center">Choose the Assignment</h1>
        <div className="row bg-dark border text-white text-center">
          <div className="col-3 ">Subject</div>
          <div className="col-3 ">Assignment</div>
          <div className="col-3 ">Performance</div>
        </div>
        {quizdata.map((n, index) => (
          <div className="row border text-center" key={index}>
            <div className="col-3">{n.subject}</div>
            <div className="col-3">{n.name}</div>
            <div className="col-3">
              {performance[index] === "0" ? "Not Done" : performance[index]}
            </div>
            <div className="col-1">
              <button
                className="btn btn-primary m-1"
                onClick={() => handleAssignment(index)}
              >
                Do
              </button>
            </div>
            <div className="col-2">
              {performance[index] === "0" ? (
                ""
              ) : (
                <button
                  className="btn btn-primary m-1"
                  onClick={() => handleAssignmentCheck(index)}
                >
                  Check
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ChooseAssigment;
