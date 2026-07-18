import { useEffect, useState } from "react";

type TypingTextProps = {
  firstText: string;
  secondText: string;
  speed?: number;
};

export const TypingText = ({
  firstText,
  secondText,
  speed = 100,
}: TypingTextProps) => {
  const [firstDisplay, setFirstDisplay] = useState("");
  const [secondDisplay, setSecondDisplay] = useState("");

  useEffect(() => {
    let firstIndex = 0;

    const firstInterval = setInterval(() => {
      setFirstDisplay(firstText.slice(0, firstIndex + 1));
      firstIndex++;

      if (firstIndex === firstText.length) {
        clearInterval(firstInterval);
      }
    }, speed);

    return () => clearInterval(firstInterval);
  }, [firstText, speed]);

  useEffect(() => {
    // Tunggu sampai Frontend selesai diketik
    if (firstDisplay !== firstText) return;

    let secondIndex = 0;

    const secondInterval = setInterval(() => {
      setSecondDisplay(secondText.slice(0, secondIndex + 1));
      secondIndex++;

      if (secondIndex === secondText.length) {
        clearInterval(secondInterval);
      }
    }, speed);

    return () => clearInterval(secondInterval);
  }, [firstDisplay, firstText, secondText, speed]);

  return (
    <>
      <div>{firstDisplay}</div>
      <div>{secondDisplay}</div>
    </>
  );
};