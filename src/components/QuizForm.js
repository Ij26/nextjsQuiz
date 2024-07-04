import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const QuizForm = ({ addQuestion, finalizeQuiz }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [message, setMessage] = useState("");

  const handleAddQuestion = (e) => {
    e.preventDefault();
    addQuestion({ question, options, correctAnswer });
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
    setMessage("Question added successfully");
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <Form>
      <label>Question:</label>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {options.map((option, index) => (
        <div key={index}>
          <label>Option {index + 1}:</label>
          <input
            type="text"
            value={option}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
          />
        </div>
      ))}
      <label>Correct Answer:</label>
      <input
        type="text"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />
      <Button onClick={handleAddQuestion}>Add Question</Button>
      <Button onClick={finalizeQuiz}>Finalize Quiz</Button>
      {message && <Message>{message}</Message>}
    </Form>
  );
};

export default QuizForm;

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
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.div`
  margin-top: 1rem;
  color: green;
  animation: ${fadeIn} 0.5s ease-in, ${fadeOut} 0.5s ease-out 2.5s;
`;
