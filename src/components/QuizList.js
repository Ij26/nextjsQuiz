import styled from "styled-components";

const QuizList = ({ quizzes, startQuiz }) => {
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
        </Quiz>
      ))}
      <Button onClick={startQuiz}>Attempt Quiz</Button>
    </List>
  );
};

export default QuizList;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Quiz = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;
