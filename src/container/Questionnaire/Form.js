import React, { useState } from "react";
import PersonalInfo from "./S1_PersonalInfo";
import Purpose from "./S2_Purpose";
import Color from "./S3_Color";
import Typography from "./S4_Typography";
import Layout from "./S5_Layout";
import Submit from "./Submit";

import "./Form.scss";

function Form() {
  const [step, setStep] = useState(0);

  const formTitle = [
    "Let us know more about you",
    "You want to have a website for...",
    "Your prefered colour is ...",
    "You like the typography...",
    "You prefer the layout ...",
    "Tell us more about your project:"
  ];

  const FormBody = () => {
    switch (step) {
      case 0:
        return <PersonalInfo setStep={setStep} step={step} />;
      case 1:
        return <Purpose setStep={setStep} step={step} />;
      case 2:
        return <Color setStep={setStep} step={step} />;
      case 3:
        return <Typography setStep={setStep} step={step} />;
      case 4:
        return <Layout setStep={setStep} step={step} />;
      case 5:
        return <Submit setStep={setStep} step={step} />;
      default:
      // do nothing
    }
  };
  return (
    <>
      <div className="form">
        <div className="form-container">
          <div className="form-header">
            <h1 key={formTitle.length}>{formTitle[step]}</h1>
          </div>
          <div className="form-body">{FormBody()}</div>
          <div className="form-footer">
            <button
              disabled={step === 0}
              onClick={() => {
                setStep((currentStep) => currentStep - 1);
              }}
            >
              Prev
            </button>
            <div className="progressbar">
              <div
                className="form-bar"
                style={{
                  width:
                    step === 0
                      ? "16.6%"
                      : step === 1
                        ? "33.3%"
                        : step === 2
                          ? "50%"
                          : step === 3
                            ? "66.4%"
                            : step === 4
                              ? "83%"
                              : "100%"
                }}
              ></div>
            </div>
            <button
              disabled={step === formTitle.length - 1}
              onClick={() => {
                setStep((currentStep) => currentStep + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
