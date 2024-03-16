import { useQuiz } from "@context/quizContext";
import { ImageSizes, Technologies } from "@ts-types/quizTypes";
import { CountdownTimer, ProgressBar, Question } from "./";
import { Button, Image } from "@ui/index";
import { calculateTotalSecondsForQuiz } from "@utils/helpers";

const ActiveScreen = () => {
  const { quizInfo, exitTheQuiz, nextQuestion, answer, index, compleTheQuiz } =
    useQuiz();

  if (!quizInfo?.imageSrc) return;

  const { questions } = quizInfo;
  const totalQuestions = questions.length;

  const isLastQuestion = index === totalQuestions - 1;

  const totalSecondsForQuiz = calculateTotalSecondsForQuiz(totalQuestions);

  return (
    <div className="space-y-10 text-sm md:text-lg">
      <div className="flex items-center justify-between">
        <Image
          src={quizInfo?.imageSrc}
          size={ImageSizes.medium}
          isReactLogo={quizInfo?.technologyName === Technologies.react}
        />
        <CountdownTimer seconds={totalSecondsForQuiz} />
      </div>
      <ProgressBar />
      <Question />
      <div className="flex items-center justify-between">
        <Button onClick={exitTheQuiz}>Exit</Button>
        {answer !== null && (
          <Button
            onClick={() => (isLastQuestion ? compleTheQuiz() : nextQuestion())}
          >
            {isLastQuestion ? "Finish" : "Next"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ActiveScreen;
