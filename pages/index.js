// pages/index.js
import { useState } from "react";
import QuizForm from "../src/components/QuizForm";
import QuizList from "../src/components/QuizList";
import styled from "styled-components";

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);

  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
  };

  return (
    <Container>
      <Title>Online Quiz Maker</Title>
      <QuizForm addQuiz={addQuiz} />
      <QuizList quizzes={quizzes} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #f0f0f0;
  min-height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #333;
`;
