import React from "react";
import "./SplashScreen.css";
import BootSequence from "../../components/bootSequence/BootSequence";

export default function SplashScreen({ onComplete }) {
  return (
    <div className="splash-container">
      <BootSequence onComplete={onComplete} />
    </div>
  );
}
