import StartScreen from "./features/start-screen/StartScreen";
import { useQuiz } from "./context/quizContext";
import { Status } from "./types/quizTypes";

function App() {
  const { status } = useQuiz();

  return (
    <div className="flex items-center justify-center py-8">
      {status === Status.ready && <StartScreen />}
      {status === Status.active && <div> Started</div>}
      {status === Status.finished && <div> Finished</div>}
    </div>
  );
}

export default App;
