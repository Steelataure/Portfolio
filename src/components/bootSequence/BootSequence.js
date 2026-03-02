import React, { useState, useEffect } from "react";
import "./BootSequence.scss";

const logs = [
    "INITIALIZING DEVOPS PIPELINE...",
    "CONNECTING TO CLOUD INFRASTRUCTURE...",
    "MOUNTING PROJECT MODULES...",
    "LOADING TECH STACK...",
    "DOCKER DAEMON: RUNNING",
    "KUBERNETES CLUSTER: ACTIVE",
    "FETCHING REPOSITORIES...",
    "CHECKING DEPENDENCIES...",
    "OPTIMIZING BROWSER RENDERING...",
    "ESTABLISHING SECURE CONNECTION...",
    "SYSTEM STATUS: 100% READY"
];

const BootSequence = ({ onComplete }) => {
    const [currentLog, setCurrentLog] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (currentLog < logs.length) {
            const timeout = setTimeout(() => {
                setCurrentLog(currentLog + 1);
                setProgress(((currentLog + 1) / logs.length) * 100);
            }, 150); // Fast log sequence
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [currentLog, onComplete]);

    return (
        <div className="boot-container">
            <div className="boot-content">
                <div className="boot-header">
                    <span className="cursor-prompt">#</span> SYSTEM BOOT SEQUENCE v4.0.0
                </div>
                <div className="boot-logs">
                    {logs.slice(0, currentLog).map((log, index) => (
                        <div key={index} className="log-line">
                            <span className="status-ok">[OK]</span> {log}
                        </div>
                    ))}
                    {currentLog < logs.length && (
                        <div className="log-line current">
                            <span className="status-ok">[..]</span> {logs[currentLog]}
                            <span className="blink">█</span>
                        </div>
                    )}
                </div>
                <div className="boot-footer">
                    <div className="progress-label">BOOTING... {Math.round(progress)}%</div>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BootSequence;
