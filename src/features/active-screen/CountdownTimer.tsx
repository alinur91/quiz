import { useQuiz } from "@context/quizContext";
import { useEffect, useState } from "react";

/**
 * A countdown timer component that displays the remaining time in minutes and seconds.
 * It triggers a callback function when the countdown reaches zero.
 * @param seconds The initial number of seconds for the countdown (default: 0).
 * @param shakeThreshold The threshold at which the countdown timer shakes to indicate urgency (default: 7).
 */
const CountdownTimer = ({
  seconds = 0,
  shakeThreshold = 7,
}: {
  seconds?: number;
  shakeThreshold?: number;
}) => {
  // State to store the remaining time in seconds
  const [timeInSeconds, setTimeInSeconds] = useState(seconds);

  // Context hook to access quiz-related functions
  const { compleTheQuiz: finishTheQuiz } = useQuiz();

  // Effect to update the timer every second and handle countdown logic
  useEffect(() => {
    if (timeInSeconds > 0) {
      // Start the countdown interval
      const intervalId = setInterval(() => {
        setTimeInSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      // Clear the interval when component unmounts or when countdown reaches zero
      return () => {
        clearInterval(intervalId);
      };
    } else {
      // Finish the quiz when countdown reaches zero
      finishTheQuiz();
    }
  }, [finishTheQuiz, timeInSeconds]);

  // Function to format the remaining time in minutes:seconds format
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Determine the class for countdown animation based on shake threshold
  const countdownClass =
    timeInSeconds <= shakeThreshold
      ? "from-red-600 via-red-700 to-red-800 animate-shake"
      : "from-blue-200 via-indigo-400 to-blue-400";

  return (
    <div
      className={`bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl ${countdownClass}`}
    >
      {formatTime(timeInSeconds)}
    </div>
  );
};

export default CountdownTimer;
