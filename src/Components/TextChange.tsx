"use client";

import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Anam"];  // Directly define the texts array
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      // Handle forward or backward typing effect
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      // Once the text is fully typed out, reverse the direction
      if (endValue >= texts[index].length) {
        setIsForward(false);
      }

      // Once the text is fully erased, move to the next text
      if (endValue <= 0) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);  // `texts` is static, so no need to include it here

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
