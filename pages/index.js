import { useState } from "react";
import QuizForm from "../src/components/QuizForm";
import QuizList from "../src/components/QuizList";
import QuizAttempt from "../src/components/QuizAttempt";
import styled from "styled-components";

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);
  const [quizFinalized, setQuizFinalized] = useState(false);
  const [isAttemptingQuiz, setIsAttemptingQuiz] = useState(false);
  const [score, setScore] = useState(null);

  const addQuestion = (quiz) => {
    setQuizzes([...quizzes, quiz]);
  };

  const finalizeQuiz = () => {
    setQuizFinalized(true);
  };

  const startQuiz = () => {
    setIsAttemptingQuiz(true);
    setScore(null); // Reset score when starting a new attempt
  };

  const finishQuiz = (score) => {
    setIsAttemptingQuiz(false);
    setScore(score);
  };

  return (
    <Container>
      <Title>Online Quiz Maker</Title>
      {!quizFinalized ? (
        <QuizForm addQuestion={addQuestion} finalizeQuiz={finalizeQuiz} />
      ) : isAttemptingQuiz ? (
        <QuizAttempt quizzes={quizzes} finishQuiz={finishQuiz} />
      ) : (
        <QuizList quizzes={quizzes} startQuiz={startQuiz} />
      )}
      {score !== null && (
        <ScoreDisplay>
          Your final score is: {score} / {quizzes.length}
        </ScoreDisplay>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #f0f4f8;
  min-height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #333;
`;

const ScoreDisplay = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.score === props.total ? "green" : "red")};
`;
