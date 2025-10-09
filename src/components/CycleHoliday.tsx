import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Halloween"
    | "Christmas"
    | "Easter"
    | "New Years"
    | "Thanksgiving";

const holidayEmojis: Record<Holiday, string> = {
    Halloween: "👻",
    Christmas: "🎄",
    Easter: "🐇",
    "New Years": "🎉",
    Thanksgiving: "🥧",
};
const alphabetOrder: Holiday[] = [
    "Christmas",
    "Easter",
    "Halloween",
    "New Years",
    "Thanksgiving",
];
const yearOrder: Holiday[] = [
    "New Years",
    "Easter",
    "Halloween",
    "Thanksgiving",
    "Christmas",
];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("Halloween");
    const advanceAlphabet = () => {
        const idx = alphabetOrder.indexOf(currentHoliday);
        setCurrentHoliday(alphabetOrder[(idx + 1) % alphabetOrder.length]);
    };
    const advanceYear = () => {
        const idx = yearOrder.indexOf(currentHoliday);
        setCurrentHoliday(yearOrder[(idx + 1) % yearOrder.length]);
    };

    return (
        <div>
            Holiday: {holidayEmojis[currentHoliday]}
            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
