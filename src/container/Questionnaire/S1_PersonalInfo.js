import React from "react";
import "./Form.scss";

export default function PersonalInfo({ setStep }) {
  return (
    <>
      <div className="formbody-contanier">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder="You prefere us call you:)" style={{ width: '30ch' }} />


          {/* <label htmlFor="email"></label>
          <input type="email" id="email" email="email" placeholder="Your email" pattern=".+@globex\.com" size="30" required style={{ width: '30ch' }} /> */}
        </div>
        <button className="app-btn" onClick={() => setStep((currentStep) => currentStep + 1)}>Let's Start</button>
      </div>
    </>
  );
}
