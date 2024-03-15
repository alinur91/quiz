import { ActiveScreen, FinishedScreen, StartScreen } from "@components/index";
import { useQuiz } from "@context/quizContext";
import { Status } from "@ts-types/quizTypes";

function App() {
  const { status } = useQuiz();

  return (
    <div className="flex  items-center justify-center px-14 py-8 ">
      <div className="w-[25rem] md:w-[40rem]">
        {status === Status.ready && <StartScreen />}
        {status === Status.active && <ActiveScreen />}
        {status === Status.finished && <FinishedScreen />}
      </div>
    </div>
  );
}

export default App;
