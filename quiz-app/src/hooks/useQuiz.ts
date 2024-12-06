import { useState, useEffect } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const useQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  
  useEffect(() => {
    const fetchQuestions = () => [
      { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
      { question: "What is the capital of France?", options: ["Berlin", "Paris", "Rome"], answer: "Paris" },
    ];
    setQuestions(fetchQuestions());
  }, []);

  return { questions };
};

export default useQuiz;
