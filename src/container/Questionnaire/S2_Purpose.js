import React from "react";
import "./Form.scss";

export default function Purpose({ setStep }) {
  const purposeOptions = [
    { purposeImg: "image1", purposeText: "Personal" },
    { purposeImg: "image2", purposeText: "Product" },
    { purposeImg: "image3", purposeText: "Community" },
    { purposeImg: "image4", purposeText: "Business" }
  ];
  return (
    <>
      <div className="formbody-contanier">
        <div className="answer-section">
          {purposeOptions.map((purposeOption, index) => (
            <div className="answer" key={index}>
              <button onClick={() => setStep((currentStep) => currentStep + 1)}>
                {purposeOption.purposeImg}
              </button>
              <p>{purposeOption.purposeText}</p>
            </div>
          ))}
        </div>
        <div className="form-other">
          <label htmlFor="purpose">Other: </label>
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
