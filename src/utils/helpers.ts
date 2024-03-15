export const getTotalSecondsForQuiz = (questionsCount: number) => {
  const secondsPerQuestion = 30;
  return questionsCount * secondsPerQuestion;
};
