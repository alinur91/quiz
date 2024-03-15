import { useQuiz } from "@context/quizContext";
import { questions } from "@data/questions";
import {Option} from "./";

const Question = () => {
  const { index, quizInfo } = useQuiz();

  if (!quizInfo?.technologyName) return;

  const { question, options, correctOption } =
    questions[quizInfo?.technologyName].questions[index];

  return (
    <div>
      <h4 className="mb-10 text-sm font-bold text-white md:text-lg">
        {question}
      </h4>
      <ul className="space-y-4">
        {options.map((option, i) => (
          <Option
            key={i}
            option={option}
            index={i}
            correctOption={correctOption}
          />
        ))}
      </ul>
    </div>
  );
};

export default Question;
