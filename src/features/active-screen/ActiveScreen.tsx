import { useQuiz } from "@context/quizContext";
import { ImageSizes, Technologies } from "@ts-types/quizTypes";
import { CountdownTimer, ProgressBar, Question } from "./";
import { Button, Image } from "@ui/index";
import { getTotalSecondsForQuiz } from "@utils/helpers";

const ActiveScreen = () => {
  const { quizInfo, exitTheQuiz, nextQuestion, answer, index, finishTheQuiz } =
    useQuiz();

  if (!quizInfo?.imageSrc) return;

  const lastQuestion = quizInfo.questions.length - 1 === index;

  return (
    <div className="space-y-10 text-sm md:text-lg">
      <div className="flex items-center justify-between">
        <Image
          src={quizInfo?.imageSrc}
          size={ImageSizes.medium}
          isReactLogo={quizInfo?.technologyName === Technologies.react}
        />
        <CountdownTimer
          seconds={getTotalSecondsForQuiz(quizInfo.questions.length)}
        />
      </div>
      <ProgressBar />
      <Question />
      <div className="flex justify-between">
        <Button onClick={exitTheQuiz}>Exit</Button>
        {answer === null || lastQuestion ? null : (
          <Button onClick={nextQuestion}>Next</Button>
        )}
        {lastQuestion && answer !== null && (
          <Button onClick={finishTheQuiz}>Finish</Button>
        )}
      </div>
    </div>
  );
};

export default ActiveScreen;
