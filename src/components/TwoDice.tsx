import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);

    const rollLeft = () => {
        setLeftDie(d6());
    };
    const rollRight = () => {
        setRightDie(d6());
    };

    // eslint-disable-next-line no-undef
    let message: JSX.Element | null = null;
    if (leftDie === rightDie) {
        message = leftDie === 1 ? <p>Lose</p> : <p>Win</p>;
    }

    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                <span data-testid="left-die">{leftDie}</span>{" "}
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <Button onClick={rollLeft}>Roll Left</Button>{" "}
            <Button onClick={rollRight}>Roll Right</Button>
            {message}
        </div>
    );
}
