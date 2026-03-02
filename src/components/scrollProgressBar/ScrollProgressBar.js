import React, { useState, useEffect } from "react";
import "./ScrollProgressBar.scss";

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScrollY = window.scrollY;
            const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
            if (totalScrollHeight > 0) {
                setScrollProgress((currentScrollY / totalScrollHeight) * 100);
            }
        };

        window.addEventListener("scroll", updateScrollProgress);
        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <div className="progress-container">
            <div
                className="progress-bar"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
    );
};

export default ScrollProgressBar;
