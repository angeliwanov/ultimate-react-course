import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SECONDS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading", //loading, error, ready, active, finished
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  remainingSeconds: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        remainingSeconds: SECONDS_PER_QUESTION * state.questions.length,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
        remainingSeconds: SECONDS_PER_QUESTION * state.questions.length,
      };
    case "tick":
      return {
        ...state,
        remainingSeconds: state.remainingSeconds - 1,
        status:
          state.remainingSeconds === 0
            ? (state.status = "finished")
            : state.status,
      };
    default:
      throw new Error("Unknown action");
  }
}

function QuizProvidor({ children }) {
  const [
    { questions, status, index, answer, points, highscore, remainingSeconds },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "dataReceived",
          payload: data,
        })
      )
      .catch((err) =>
        dispatch({
          type: "dataFailed",
        })
      );
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        remainingSeconds,
        numQuestions,
        maxPoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of QuizProvidor");
  return context;
}

export { QuizProvidor, useQuiz };
