import { useQuiz } from "@context/quizContext";
import { calculateMaxPoints } from "@utils/helpers";

const ProgressBar = () => {
  const { index, quizInfo, points, pointsPerCorrectAnswer } = useQuiz();
  const totalQuestions = quizInfo?.questions.length || 0;
  const progressBarValue = index + 1;

  const maxPoints = calculateMaxPoints(totalQuestions, pointsPerCorrectAnswer);

  return (
    <header className="mb-18 grid grid-cols-[auto,auto] justify-between gap-5">
      <progress
        className="col-span-full h-3 w-full appearance-none"
        max={totalQuestions}
        value={progressBarValue}
      />
      <p className="text-white">
        Question <strong>{progressBarValue}</strong> / {totalQuestions}
      </p>

      <p className="text-white">
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
};

export default ProgressBar;
