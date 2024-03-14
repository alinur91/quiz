import { ActiveScreen, FinishedScreen, StartScreen } from "@components/index";
import { useQuiz } from "@context/quizContext";
import { Status } from "@ts-types/quizTypes";

function App() {
  const { status } = useQuiz();

  return (
    <div className="flex items-center justify-center py-8 text-center">
      {status === Status.ready && <StartScreen />}
      {status === Status.active && <ActiveScreen />}
      {status === Status.finished && <FinishedScreen />}
    </div>
  );
}

export default App;
