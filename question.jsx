import React, { Component } from "react";

class Question extends Component {
  render() {
    const { currentIndex, question, handleResponse, response } = this.props;
    return (
      <div>
        <h3>Question Number : {currentIndex + 1}</h3>
        <div>{question[currentIndex].text}?</div>
        <div onClick={() => handleResponse("A")}>
          A. {question[currentIndex].options[0]}
        </div>
        <div onClick={() => handleResponse("B")}>
          B. {question[currentIndex].options[1]}
        </div>
        <div onClick={() => handleResponse("C")}>
          C. {question[currentIndex].options[2]}
        </div>
        <div onClick={() => handleResponse("D")}>
          D. {question[currentIndex].options[3]}
        </div>
        <div>
          Your Answer:{" "}
          {response.length
            ? response[currentIndex].ans
              ? response[currentIndex].ans
              : "Not answer"
            : ""}
        </div>
      </div>
    );
  }
}

export default Question;
