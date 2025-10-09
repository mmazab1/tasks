import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(e.target.value);
    };
    const useAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };
    const gainAttempts = () => {
        const amount = parseInt(requestedAttempts);
        if (!isNaN(amount)) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleChange}
                placeholder="Enter attempts to gain"
            />
            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </button>
            <button onClick={gainAttempts}>gain</button>
        </div>
    );
}
