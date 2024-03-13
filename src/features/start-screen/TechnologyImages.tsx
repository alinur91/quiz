import { useQuiz } from "../../context/quizContext";
import { questions } from "../../data/questions";
import { ImageSizes, Technologies } from "../../types/quizTypes";
import Image from "../../ui/Image";

const TechnologyImages = () => {
  const { setQuizStatusToActive } = useQuiz();

  return (
    <ul className="grid grid-cols-2 gap-3 pt-6">
      {Object.values(questions).map((question) => (
        <li
          key={question.imageSrc}
          onClick={setQuizStatusToActive}
          className="bg-gradient flex cursor-pointer justify-center rounded-xl bg-gradient-to-l from-blue-800 via-indigo-900 to-purple-900 bg-no-repeat py-3 hover:bg-gradient-to-r md:py-5"
        >
          <Image
            isReactLogo={question.technologyName === Technologies.react}
            src={question.imageSrc}
            size={ImageSizes.small}
          />
        </li>
      ))}
    </ul>
  );
};

export default TechnologyImages;
