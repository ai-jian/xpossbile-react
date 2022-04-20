import React, { useState } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './Questionnaire.scss'

const Questionnaire = () => {
  const questions = [
    {
      questionText: `You want to have a website for...`,
      answerOptions: [
        { answerText: 'image1', },
        { answerText: 'image2', },
        { answerText: 'image3', },
        { answerText: 'image4', },
      ]
    },
    {
      questionText: `Your prefered colour is ....`,
      answerOptions: [
        { answerText: 'image1', },
        { answerText: 'image2', },
        { answerText: 'image3', },
        { answerText: 'image4', },
      ]
    },
    {
      questionText: `You like the typography...`,
      answerOptions: [
        { answerText: 'image1', },
        { answerText: 'image2', },
        { answerText: 'image3', },
        { answerText: 'image4', },
      ]
    },
    {
      questionText: `You prefer the layout .... `,
      answerOptions: [
        { answerText: 'image1', },
        { answerText: 'image2', },
        { answerText: 'image3', },
        { answerText: 'image4', },
      ]
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);

  console.log(currentQuestion)

  return (
    <section className="questionnaire">
      {
        <>
          <div className="question-section">
            {/* <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div> */}
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => setCurrentQuestion(currentQuestion + 1)} >{answerOption.answerText}</button>
            ))}
          </div>

          <div className="question-progress">
            <button type="button" className="back-btn" onClick={() => setCurrentQuestion(currentQuestion - 1)}><IoIosArrowBack /></button>

            <p className="question-count"><span>Question {currentQuestion + 1}</span>/{questions.length}</p>

            <button type="button" className="next-btn" onClick={() => setCurrentQuestion(currentQuestion + 1)}><IoIosArrowForward /></button>
          </div>
        </>
      }
    </section>
  )
}

export default Questionnaire

// import React, { Component } from 'react';
// import FormUserDetails from './FormUserDetails';
// import FormPersonalDetails from './FormPersonalDetails';
// import Confirm from './Confirm';
// import Success from './Success';

// export class Questionnaire extends Component {
//   state = {
//     step: 1,
//     firstName: '',
//     lastName: '',
//     email: '',
//     occupation: '',
//     city: '',
//     bio: ''
//   };

//   // Proceed to next step
//   nextStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step + 1
//     });
//   };

//   // Go back to prev step
//   prevStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step - 1
//     });
//   };

//   // Handle fields change
//   handleChange = input => e => {
//     this.setState({ [input]: e.target.value });
//   };

//   render() {
//     const { step } = this.state;
//     const { firstName, lastName, email, occupation, city, bio } = this.state;
//     const values = { firstName, lastName, email, occupation, city, bio };

//     switch (step) {
//       case 1:
//         return (
//           <FormUserDetails
//             nextStep={this.nextStep}
//             handleChange={this.handleChange}
//             values={values}
//           />
//         );
//       case 2:
//         return (
//           <FormPersonalDetails
//             nextStep={this.nextStep}
//             prevStep={this.prevStep}
//             handleChange={this.handleChange}
//             values={values}
//           />
//         );
//       case 3:
//         return (
//           <Confirm
//             nextStep={this.nextStep}
//             prevStep={this.prevStep}
//             values={values}
//           />
//         );
//       case 4:
//         return <Success />;
//       default:
//         (console.log('This is a multi-step form built with React.'))
//     }
//   }
// }

// export default Questionnaire;
