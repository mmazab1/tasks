import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "green",
        "blue",
        "purple",
        "yellow",
        "orange",
        "pink",
        "cyan",
    ];
    const [selectedColor, setSelectedColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="colorOptions"
                        onChange={() => {
                            setSelectedColor(color);
                        }}
                        id={`color-radio-${color}`}
                        label={color}
                        checked={selectedColor === color}
                        style={{ color: color }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                    textAlign: "center",
                    width: "150px",
                    borderRadius: "8px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
