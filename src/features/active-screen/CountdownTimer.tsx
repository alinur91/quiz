import { useQuiz } from "@context/quizContext";
import { useEffect, useState } from "react";

const CountdownTimer = ({ seconds = 0, shakeThreshold = 7 }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(seconds);
  const { finishTheQuiz } = useQuiz();

  useEffect(() => {
    if (timeInSeconds > 0) {
      const intervalId = setInterval(() => {
        setTimeInSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    } else {
      finishTheQuiz();
    }
  }, [finishTheQuiz, timeInSeconds]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

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
