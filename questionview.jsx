import React, { Component } from "react";

class Question extends Component {
  state = {};
  render() {
    const {
      currentIndex,
      question,
      responseSheet,
      handleResponse,
      mode,
      responseCheck
    } = this.props;
    return (
      <div>
        <h3>Question Number : {currentIndex + 1}</h3>
        {mode === "Check" ? (
          <div>
            <div>{question[currentIndex].text}?</div>
            <div>A. {question[currentIndex].options[0]}</div>
            <div>B. {question[currentIndex].options[1]}</div>
            <div>C. {question[currentIndex].options[2]}</div>
            <div>D. {question[currentIndex].options[3]}</div>
            Your Answer :{" "}
            {responseCheck[currentIndex].showans
              ? responseCheck[currentIndex].showans
              : "Not Answered"}
            {responseCheck[currentIndex].response ===
            responseCheck[currentIndex].answer ? (
              <div className="text-success">Correct Answer</div>
            ) : (
              <div className="text-danger">
                Incorrect. The Correct Answer is{" "}
                {responseCheck[currentIndex].answer}{" "}
              </div>
            )}
          </div>
        ) : (
          <div>
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
              Your Answer :{" "}
              {responseSheet.length > 0
                ? responseSheet[currentIndex].showans
                  ? responseSheet[currentIndex].showans
                  : "Not Answer"
                : "Not Answer"}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Question;
