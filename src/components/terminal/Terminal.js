import React, { useState, useEffect } from "react";
import "./Terminal.scss";

const Terminal = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [history, setHistory] = useState([]);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (currentStep >= steps.length) {
            const timeout = setTimeout(() => {
                setCurrentStep(0);
                setDisplayText("");
                setHistory([]);
            }, 5000);
            return () => clearTimeout(timeout);
        }

        const step = steps[currentStep];
        const fullText = step.text;
        const isCommand = step.type === "command";

        if (displayText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
            }, isCommand ? 40 : 15);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setHistory(prev => [...prev, { ...step, text: fullText }]);
                setDisplayText("");
                setCurrentStep(currentStep + 1);
            }, step.delay || 1000);
            return () => clearTimeout(timeout);
        }
    }, [displayText, currentStep, steps]);

    return (
        <div className="terminal-window">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="terminal-title">bash — alex@devops-portfolio</div>
            </div>
            <div className="terminal-body">
                {history.map((step, idx) => (
                    <div key={idx} className={`terminal-line ${step.type}`}>
                        {step.type === "command" && <span className="prompt">$ </span>}
                        {step.text}
                    </div>
                ))}
                {currentStep < steps.length && (
                    <div className={`terminal-line ${steps[currentStep]?.type}`}>
                        {steps[currentStep]?.type === "command" && <span className="prompt">$ </span>}
                        {displayText}
                        <span className="cursor">█</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Terminal;
