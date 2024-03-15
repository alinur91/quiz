import { useQuiz } from "@context/quizContext";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type OptionProp = {
  option: string;
  index: number;
  correctOption: number;
};

const Option = ({ option, index, correctOption }: OptionProp) => {
  const { giveTheAnswer, answer } = useQuiz();
  const questionHasBeenAnswered = answer !== null;

  const handleClick = (index: number) => {
    const isAnswerCorrect = correctOption === index;
    if (!questionHasBeenAnswered) {
      giveTheAnswer(index, isAnswerCorrect);
    }
  };

  const questionHasBeenAnsweredClass = questionHasBeenAnswered
    ? "cursor-not-allowed"
    : "cursor-pointer transition duration-500 hover:translate-x-4 hover:transform";

  const clickedOptionClass = index === answer ? "translate-x-4" : "";

  return (
    <li
      onClick={() => handleClick(index)}
      className={`flex h-10 w-full  items-center justify-between rounded-full  bg-gradient-to-r from-blue-800 via-indigo-400 to-blue-600 p-6 text-transparent text-white ${questionHasBeenAnsweredClass} ${clickedOptionClass}`}
    >
      <span>{option}</span>
      {questionHasBeenAnswered && (
        <span>
          {index === correctOption ? (
            <FaCheck className="text-lg  text-green-600 md:text-2xl" />
          ) : (
            <IoClose className="text-lg  text-red-600 md:text-2xl" />
          )}
        </span>
      )}
    </li>
  );
};

export default Option;
