import React /*, { useState }*/ from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";

export function DoubleHalf(): React.JSX.Element {
    const { dhValue, setDhValue } = useDoubleHalfState();
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button
                onClick={() => {
                    setDhValue(2 * dhValue);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setDhValue(0.5 * dhValue);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
