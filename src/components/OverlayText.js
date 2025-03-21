import React from "react";
import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure.jsx"; // Import TextPressure
import BlurText from "../blocks/TextAnimations/BlurText/BlurText.jsx"; // Import BlurText
import "./OverlayText.css"; // Import styles

const OverlayText = () => {
  const handleAnimationComplete = () => {
    console.log("BlurText animation completed!");
  };

  return (
    <div className="overlay-text">
      {/* DevBrows Name using TextPressure */}
      <TextPressure
        text="DevBrows"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={48} // Adjust size as needed
      />

      {/* Tagline using BlurText */}
      <BlurText
        text="Crafting Digital Experiences at Hyper Speed"
        delay={250}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="tagline"
      />
    </div>
  );
};

export default OverlayText;
