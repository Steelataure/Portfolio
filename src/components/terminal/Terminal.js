import React, { useState, useEffect } from "react";
import "./Terminal.scss";

const Terminal = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (currentStep >= steps.length) {
            // Loop or stop
            const timeout = setTimeout(() => {
                setCurrentStep(0);
                setDisplayText("");
            }, 3000);
            return () => clearTimeout(timeout);
        }

        const fullText = steps[currentStep].text;
        const isCommand = steps[currentStep].type === "command";

        if (displayText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
            }, isCommand ? 50 : 20);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentStep(currentStep + 1);
                setDisplayText("");
            }, steps[currentStep].delay || 1000);
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
                {steps.slice(0, currentStep).map((step, idx) => (
                    <div key={idx} className={`terminal-line ${step.type}`}>
                        {step.type === "command" && <span className="prompt">$ </span>}
                        {step.text}
                    </div>
                ))}
                <div className={`terminal-line ${steps[currentStep]?.type}`}>
                    {steps[currentStep]?.type === "command" && <span className="prompt">$ </span>}
                    {displayText}
                    <span className="cursor">█</span>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
