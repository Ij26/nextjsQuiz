// src/components/QuizList.js
import styled from "styled-components";

const QuizList = ({ quizzes }) => {
  return (
    <List>
      {quizzes.map((quiz, index) => (
        <Quiz key={index}>
          <h3>{quiz.question}</h3>
          <ul>
            {quiz.options.map((option, idx) => (
              <li key={idx}>{option}</li>
            ))}
          </ul>
          <strong>Correct Answer: {quiz.correctAnswer}</strong>
        </Quiz>
      ))}
    </List>
  );
};

export default QuizList;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Quiz = styled.div`
  background: #fff;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
