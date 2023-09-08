import React, { useState } from 'react';
import './Questioner.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const questions = [
  {
    id: 1,
    question: 'Question 1: What is the capital of France?',
    options: ['London', 'Paris', 'Berlin'],
  },
  {
    id: 2,
    question: 'Question 2: What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Mars'],
  },
  {
    id: 3,
    question: 'Question 3: What is the capital of France?',
    options: ['London', 'Paris', 'Berlin'],
  },
  {
    id: 4,
    question: 'Question 4: What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Mars'],
  },
  {
    id: 5,
    question: 'Question 5: What is the capital of France?',
    options: ['London', 'Paris', 'Berlin'],
  },
  {
    id: 6,
    question: 'Question 6: What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Mars'],
  },
    {
    id: 7,
    question: 'Question 7: What is the capital of France?',
    options: ['London', 'Paris', 'Berlin'],
  },
  {
    id: 8,
    question: 'Question 8: What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Mars'],
  },
  {
    id: 9,
    question: 'Question 9: What is the capital of France?',
    options: ['London', 'Paris', 'Berlin'],
  },
  {
    id: 10,
    question: 'Question 10: What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Mars'],
  },
  // Add more questions here...
];


const Questionner = () => {
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleOptionChange = (questionId, option, event) => {
    const newAnswers = [...answers];
    const existingAnswer = newAnswers.find(answer => answer.questionId === questionId);
  
    if (existingAnswer) {
      if (existingAnswer.option === option && event.target.checked) {
        // Uncheck the option
        event.target.checked = false;
        newAnswers.splice(newAnswers.indexOf(existingAnswer), 1);
      } else {
        // Change the selected option
        existingAnswer.option = option;
      }
    } else {
      newAnswers.push({ questionId, option });
    }
  
    setAnswers(newAnswers);
  };
  
  

  const handleSubmit = () => {
    if (answers.length !== questions.length) {
      toast.error('Please select an option for all questions');
      return;
    }

    let score = 0;
    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question && question.options.includes(answer.option)) {
        score += 20;
      }
    });

    if (score === 80) {
      setResult('80%');
    } else if (score === 90) {
      setResult('90%');
    } else {
      setResult('100%');
    }
    toast.success('Your response has been successful submitted');

    
  };

  return (
    <>
      <Header />
      <div className="App">
        <h1>Fuel Free Questions</h1>
        <form>
          {questions.map(question => (
            <div key={question.id}>
              <p>{question.question}</p>
            
              {question.options.map(option => (
                <div key={option}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={answers.some(answer => answer.questionId === question.id && answer.option === option)}
                      onChange={() => handleOptionChange(question.id, option)}
                    />
                    {option}
                  </label>
                  
                </div>
                
              ))}
            </div>
          ))}
          <button className="view-offer-a" type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {result && <p>Your result: {result}</p>}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
      </div>
      <Footer />
    </>
  );
};

export default Questionner;
