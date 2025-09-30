import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setShowAnswer((prev) => !prev);
                }}
            >
                Reveal Answer
            </Button>
            {showAnswer && <div>42</div>}
        </div>
    );
}
