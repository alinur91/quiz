import { useQuiz } from "@context/quizContext";

const ProgressBar = () => {
  const { index, quizInfo, points, pointsPerCorrectAnswer } = useQuiz();

  return (
    <header className="mb-18 grid grid-cols-[auto,auto] justify-between gap-5">
      <progress
        className="col-span-full h-3 w-full appearance-none"
        max={quizInfo?.questions.length}
        value={index + 1}
      />
      <p className="text-white">
        Question <strong>{index + 1}</strong> / {quizInfo?.questions.length}
      </p>

      <p className="text-white">
        <strong>{points}</strong> /{" "}
        {(quizInfo?.questions.length as number) * pointsPerCorrectAnswer}
      </p>
    </header>
  );
};

export default ProgressBar;

//You Scored 20 out of 60 (34%) You have to work harder 😢
// You Scored 30 out of 60 (50%) You are doing well but a little of work will make you better 🤩
//You Scored 60 out of 60 (100%) Well done that's great 👏🥳
// 50 dein ne vkluchitelno  You have to work harder .  75 dein ne vkluchitelno You are doing well but a little of work will make you better. 75 zhogary Well done that's great
