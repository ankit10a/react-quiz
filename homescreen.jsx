import React, { Component } from "react";
import { getquizdata } from "./quizdata";
import ChooseAssigment from "./chooseassignment";
import Quiz from "./quizview";

class HomeScreen extends Component {
  state = {
    quizdata: getquizdata(),
    quizdataindex: "",
    quizquestionIndex: 0,
    quizview: -1,
    Performance: ["0", "0", "0", "0"],
    assignmentresponse: [[], [], [], []],
    mode: ""
  };
  handleAssignment = view => {
    this.setState({ quizview: view });
  };
  handleAssignmentCheck = view => {
    this.setState({ quizview: view, mode: "Check" });
  };
  CheckDone = () => {
    this.setState({ quizview: -1, mode: "" });
  };
  SubmitAssignment = response => {
    const { quizview, Performance } = this.state;
    this.state.assignmentresponse[quizview] = {
      subject: this.state.quizdata[quizview].subject,
      name: this.state.quizdata[quizview].name,
      assignment: quizview,
      assignResponse: response
    };
    let correctanswer = response.reduce(
      (n, m) => (m.response === m.answer ? (n += 1) : (n += 0)),
      0
    );
    Performance[quizview] = correctanswer + "/" + response.length;
    console.log(this.state.quizview, this.state.assignmentresponse);
    this.setState({ quizview: -1 });
  };
  renderView = () => {
    const quizview = this.state.quizview;
    if (quizview === -1) {
      return (
        <ChooseAssigment
          quizdata={this.state.quizdata}
          performance={this.state.Performance}
          handleAssignment={this.handleAssignment}
          handleAssignmentCheck={this.handleAssignmentCheck}
          responseCheck={this.state.assignmentresponse}
          mode={this.state.mode}
        ></ChooseAssigment>
      );
    }
    if (quizview === 0) {
      return (
        <Quiz
          quizdata={this.state.quizdata}
          quizview={quizview}
          currentIndex={this.state.quizquestionIndex}
          SubmitAssignment={this.SubmitAssignment}
          responseCheck={this.state.assignmentresponse}
          mode={this.state.mode}
          CheckDone={this.CheckDone}
        ></Quiz>
      );
    }
    if (quizview === 1) {
      return (
        <Quiz
          quizdata={this.state.quizdata}
          quizview={quizview}
          currentIndex={this.state.quizquestionIndex}
          SubmitAssignment={this.SubmitAssignment}
          responseCheck={this.state.assignmentresponse}
          mode={this.state.mode}
          CheckDone={this.CheckDone}
        ></Quiz>
      );
    }
    if (quizview === 2) {
      return (
        <Quiz
          quizdata={this.state.quizdata}
          quizview={quizview}
          currentIndex={this.state.quizquestionIndex}
          SubmitAssignment={this.SubmitAssignment}
          responseCheck={this.state.assignmentresponse}
          mode={this.state.mode}
          CheckDone={this.CheckDone}
        ></Quiz>
      );
    }
    if (quizview === 3) {
      return (
        <Quiz
          quizdata={this.state.quizdata}
          quizview={quizview}
          currentIndex={this.state.quizquestionIndex}
          SubmitAssignment={this.SubmitAssignment}
          responseCheck={this.state.assignmentresponse}
          mode={this.state.mode}
          CheckDone={this.CheckDone}
        ></Quiz>
      );
    }
  };
  render() {
    return <div className="container">{this.renderView()}</div>;
  }
}

export default HomeScreen;
