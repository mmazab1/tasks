import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <img src="C:/Users/matth/tasks/src/photo.png" alt="Picture" />
            <h1>First Header</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Matthew Mazabras. Hello World
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </p>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        First column.
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red",
                                marginTop: "10px",
                            }}
                        />
                    </Col>
                    <Col>
                        Second column.
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red",
                                marginTop: "10px",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
