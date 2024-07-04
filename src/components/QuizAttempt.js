import { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const QuizAttempt = ({ quizzes, finishQuiz }) => {
  const [answers, setAnswers] = useState(new Array(quizzes.length).fill(""));
  const [score, setScore] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = quizzes.reduce((acc, quiz, index) => {
      return acc + (answers[index] === quiz.correctAnswer ? 1 : 0);
    }, 0);
    setScore(totalScore);
    finishQuiz(totalScore);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {quizzes.map((quiz, index) => (
        <div key={index}>
          <h3>{quiz.question}</h3>
          {quiz.options.map((option, idx) => (
            <div key={idx}>
              <input
                type="radio"
                id={`option-${index}-${idx}`}
                name={`quiz-${index}`}
                value={option}
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[index] = e.target.value;
                  setAnswers(newAnswers);
                }}
              />
              <label htmlFor={`option-${index}-${idx}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <Button type="submit">Submit Quiz</Button>
      {score !== null && (
        <Score>
          Your score: {score} / {quizzes.length}
        </Score>
      )}
    </Form>
  );
};

export default QuizAttempt;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #dc3545;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

const Score = styled.div`
  margin-top: 1rem;
  font-weight: bold;
`;
