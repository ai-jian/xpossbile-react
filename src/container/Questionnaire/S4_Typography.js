import React from "react";

export default function Typography({ setStep }) {
  const answerOptions = [
    { answerImg: "Classic", answerText: "Classic" },
    { answerImg: "Modern", answerText: "Modern" },
    { answerImg: "Dynamic", answerText: "Dynamic" }
  ];
  return (
    <>
      <div className="formbody-contanier">
        <div className="answer-section">
          {answerOptions.map((answerOption, index) => (
            <div key={index}>
              <button onClick={() => setStep((currentStep) => currentStep + 1)}>
                {answerOption.answerText}
              </button>
              <p>{answerOption.answerImg}</p>
            </div>
          ))}
        </div>
        <div className="form-other">
          <label htmlFor="purpose">Other:</label>
          <input
            type="text"
            id="purpose"
            name="purpose"
            placeholder="Descirbe here"
          />
        </div>
      </div>
    </>
  );
}
