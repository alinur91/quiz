export const calculateTotalSecondsForQuiz = (questionsCount: number) => {
  const secondsPerQuestion = 30;
  return questionsCount * secondsPerQuestion;
};

export const calculateMaxPoints = (
  questionsCount: number,
  pointsPerCorrectAnswer: number,
) => {
  return questionsCount * pointsPerCorrectAnswer;
};

export const calculateCorrectAnswersPercentage = (
  usersPoints: number,
  maxPoints: number,
) => {
  return Math.floor((usersPoints / maxPoints) * 100);
};

export const getFeedbackOnQuizResults = (percentage: number) => {
  let text;
  if (percentage >= 75) {
    text = "Well done that's great 👏🥳";
  } else if (percentage >= 50) {
    text = "You are doing well but a little of work will make you better 😉";
  } else {
    text = " You have to work harder 😒";
  }

  return text;
};
