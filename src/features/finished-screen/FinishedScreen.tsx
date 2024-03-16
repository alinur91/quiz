import { useQuiz } from "@context/quizContext";
import { ImageSizes, Technologies } from "@ts-types/quizTypes";
import Button from "@ui/Button";
import Headings from "@ui/Headings";
import Image from "@ui/Image";
import {
  calculateCorrectAnswersPercentage,
  calculateMaxPoints,
  getFeedbackOnQuizResults,
} from "@utils/helpers";
import { FaRegHandPointLeft } from "@utils/icons";

const FinishedScreen = () => {
  const { quizInfo, points, pointsPerCorrectAnswer, restartTheQuiz } =
    useQuiz();

  // Calculate max points and correct answers percentage
  const maxPoints = calculateMaxPoints(
    quizInfo?.questions.length as number,
    pointsPerCorrectAnswer,
  );
  const correctAnswersPercentage = calculateCorrectAnswersPercentage(
    points,
    maxPoints,
  );

  // Get feedback text based on correct answers percentage
  const feedbackText = getFeedbackOnQuizResults(correctAnswersPercentage);

  // Handler function for restarting the quiz
  const handleRestartQuiz = () => {
    restartTheQuiz();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Display quiz image */}
      <Image
        size={ImageSizes.large}
        src={quizInfo?.imageSrc as string}
        isReactLogo={quizInfo?.technologyName === Technologies.react}
      />

      {/* Display user's score and feedback */}
      <Headings className="text-md text-center text-white md:text-xl">
        <h2>
          You Scored {points} out of {maxPoints} ({correctAnswersPercentage}%)
        </h2>
        <h2 className="flex items-center gap-2">{feedbackText} </h2>
      </Headings>

      {/* Button to restart the quiz */}
      <Button
        className="text-md flex w-72 items-center justify-center gap-2 py-5	font-semibold tracking-wider md:w-[500px] md:text-lg"
        onClick={handleRestartQuiz}
      >
        Restart the Quiz{" "}
        <FaRegHandPointLeft className="text-xl text-yellow-400" />
      </Button>

      {/* Footer with attribution */}
      <Headings className="text-lg text-yellow-500  md:text-3xl">
        <h1>
          Designed and Coded By{" "}
          <a
            target="_blank"
            className="underline"
            href="https://portfolio-alisher-nurlybayev.netlify.app/"
          >
            Alisher Nurlybayev
          </a>{" "}
        </h1>
      </Headings>
    </div>
  );
};

export default FinishedScreen;
