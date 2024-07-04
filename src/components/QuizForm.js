// src/components/QuizForm.js
import { useState } from "react";
import styled from "styled-components";

const QuizForm = ({ addQuiz }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuiz({ question, options, correctAnswer });
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <button type="submit">Add Quiz</button>
    </Form>
  );
};

export default QuizForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 5px;
`;
