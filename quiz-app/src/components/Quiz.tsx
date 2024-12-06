// src/components/Quiz.tsx
import React, { useState } from "react";
import useQuiz from "../hooks/useQuiz";
import useScore from "../hooks/useScore";
import Score from "./Score";

const Quiz = () => {
    const { questions } = useQuiz();
    const { score, updateScore } = useScore();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleAnswerSubmit = () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            updateScore(true);
        } else {
            updateScore(false);
        }
        setSelectedOption(null);
        setCurrentQuestionIndex((prev) => prev + 1);
    };

    if (currentQuestionIndex >= questions.length) {
        return <Score score={score} />;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <h3>{currentQuestion.question}</h3>
            {currentQuestion.options.map((option) => (
                <button
                    key={option}
                    onClick={() => setSelectedOption(option)}
                    style={{ backgroundColor: selectedOption === option ? "lightblue" : "white" }}
                >
                    {option}
                </button>
            ))}
            <button onClick={handleAnswerSubmit} disabled={!selectedOption}>
                Submit Answer
            </button>
        </div>
    );
};

export default Quiz;
