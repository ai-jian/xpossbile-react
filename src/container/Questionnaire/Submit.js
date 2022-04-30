import React from "react";

export default function Submit({ setStep }) {
  return (
    <>
      <div className="formbody-contanier">

        <textarea placeholder="ex. time period" />
        <label htmlFor="email"></label>
        <input type="email" id="email" email="email" placeholder="Your email" pattern=".+@globex\.com" size="30" required style={{ width: '30ch' }} />
        <input className="app-btn" type="submit" value="Submit" />
      </div>
    </>
  );
}
