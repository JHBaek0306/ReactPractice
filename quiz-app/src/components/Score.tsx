// src/components/Score.tsx
import React from "react";

interface ScoreProps {
    score: number;
}

const Score = ({ score }: ScoreProps) => {
    return (
        <div>
            <h2>Your Score: {score}</h2>
        </div>
    );
};

export default Score;
