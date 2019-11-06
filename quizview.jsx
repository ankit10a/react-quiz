import React, { Component } from "react";
import Question from "./questionview";
import ViewMarksheet from "./viewmarksheet";

class Quiz extends Component {
  state = {
    quizdet: this.props.quizdata[this.props.quizview],
    currentIndex: 0,
    question: this.props.quizdata[this.props.quizview].questions,
    view: 0,
    responseSheet: [],
    responseCheck: this.props.responseCheck[this.props.quizview].assignResponse,
    mode: this.props.mode
  };
  intialiseRespone = () => {
    let res = this.state.question.map(n => ({
      question: n.text,
      option: n.options,
      answer: n.answer,
      response: "",
      showans: ""
    }));
    let responseSheet = [...res];
    this.setState({ responseSheet });
  };
  handleNext = () => {
    if (this.state.currentIndex < this.state.question.length - 1)
      this.setState({ currentIndex: this.state.currentIndex + 1 });
  };
  handlePrevious = () => {
    if (this.state.currentIndex >= 0)
      this.setState({ currentIndex: this.state.currentIndex - 1 });
  };
  handleview = v => {
    this.setState({ view: v });
  };
  handleResponse = option => {
    let res =
      option === "A"
        ? 1
        : option === "B"
        ? 2
        : option === "C"
        ? 3
        : option === "D"
        ? 4
        : "";
    let responseSheet = [...this.state.responseSheet];
    responseSheet[this.state.currentIndex].response = res;
    responseSheet[this.state.currentIndex].showans = option;
    this.setState({ responseSheet });
  };
  gotoquestion = index => {
    this.setState({ view: 0, currentIndex: index });
  };
  Submit = () => {
    if (!this.state.mode) {
      this.props.SubmitAssignment(this.state.responseSheet);
    }
    if (this.state.mode === "Check") this.props.CheckDone();
  };
  render() {
    const {
      quizdet,
      question,
      currentIndex,
      responseSheet,
      responseCheck,
      mode
    } = this.state;

    return (
      <div>
        {responseSheet.length === 0 ? this.intialiseRespone() : ""}
        <div className="bg-light">
          <h1 className="text-center">
            {quizdet.subject} : {quizdet.name}
          </h1>
          <div className="row m-1">
            <div className="col-6">Time : 5min</div>
            <div className="col-6 text-right">
              Max Score : {quizdet.questions.length}
            </div>
          </div>
        </div>
        <div className="text-right">
          <button
            className="btn btn-primary"
            onClick={() => this.handleview(1)}
          >
            View Marksheet
          </button>
        </div>
        {this.state.view === 0 ? (
          <div>
            <Question
              question={question}
              currentIndex={currentIndex}
              handleResponse={this.handleResponse}
              choosenOption={responseSheet[currentIndex]}
              responseSheet={responseSheet}
              mode={mode}
              responseCheck={responseCheck}
            />
            {this.state.currentIndex > 0 && (
              <button
                className="btn btn-primary m-2"
                onClick={() => this.handlePrevious()}
              >
                Previous Question
              </button>
            )}
            <button
              className="btn btn-primary m-2"
              onClick={() => this.handleNext()}
            >
              Next Question
            </button>
          </div>
        ) : (
          <div>
            <ViewMarksheet
              responseSheet={this.state.responseSheet}
              gotoquestion={this.gotoquestion}
              mode={mode}
              responseCheck={responseCheck}
            />
            <div className="text-center m-2">
              {mode === "Check" ? (
                <button
                  className="btn btn-secondary"
                  onClick={() => this.Submit()}
                >
                  Go to the List of Assignments
                </button>
              ) : (
                <button
                  className="btn btn-secondary"
                  onClick={() => this.Submit()}
                >
                  Submit the Assignment{" "}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
