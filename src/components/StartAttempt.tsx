import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    const startQuiz = () => {
        setAttempts((prev) => prev - 1);
        setInProgress(true);
    };
    const stopQuiz = () => {
        setInProgress(false);
    };
    const addAttempt = () => {
        setAttempts((prev) => prev + 1);
    };
    return (
        <div>
            Attempts left: <strong>{attempts}</strong>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress} className="me-2">
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
