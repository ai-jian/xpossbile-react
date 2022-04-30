import React from "react";

export default function Layout({ setStep }) {
  const answerOptions = [
    { answerImg: "image1", answerText: "image1" },
    { answerImg: "image2", answerText: "image2" },
    { answerImg: "image3", answerText: "image3" },
    { answerImg: "image4", answerText: "image4" }
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
