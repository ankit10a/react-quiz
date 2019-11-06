import React, { Component } from "react";
import { getQuestions } from "./getQuestion";
import Question from "./question";
import ViewMarksheet from "./marksheet";

class QuizApp extends Component {
  state = {
    questions: getQuestions(),
    currentIndex: 0,
    response: [],
    view: 0
  };
  IntialiseResponse = () => {
    let response = this.state.questions.map(n => ({
      ques: n.text,
      ans: ""
    }));
    this.setState({ response });
  };
  handleNext = () => {
    if (this.state.currentIndex < 14)
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
  };
  handlePrevious = () => {
    if (this.state.currentIndex > 0)
      this.setState({ currentIndex: this.state.currentIndex - 1 });
  };
  handleResponse = ans => {
    let response = [...this.state.response];
    response[this.state.currentIndex].ans = ans;
    this.setState({ response });
  };
  handleView = () => {
    this.setState({ view: 1 });
  };
  render() {
    return (
      <div className="container">
        {this.state.response.length === 0 ? this.IntialiseResponse() : ""}
        <div className="bg-light">
          <h1 className="text-center">General Knowledge : Assignment 4A</h1>
          <div className="row">
            <div className="col-2 m-2"> Time : 5mins</div>
            <div className="col-5" />
            <div className="col-4 text-right m-1">
              Max Score:{this.state.questions.length}
            </div>
          </div>
        </div>
        <div className="col-12 text-right">
          <button className="btn btn-primary" onClick={() => this.handleView()}>
            View Marking Sheet
          </button>
        </div>
        {this.state.view === 0 ? (
          <div>
            <Question
              question={this.state.questions}
              currentIndex={this.state.currentIndex}
              handleResponse={this.handleResponse}
              choosenOption={this.state.choosenOption}
              response={this.state.response}
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
            <ViewMarksheet response={this.state.response} />
          </div>
        )}
      </div>
    );
  }
}

export default QuizApp;
