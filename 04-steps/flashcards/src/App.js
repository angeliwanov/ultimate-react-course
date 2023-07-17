import { useState } from "react";
import "./App.css";
// export default function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: 3457,
//       question: "What language is React based on?",
//       answer: "JavaScript",
//     },
//     {
//       id: 7336,
//       question: "What are the building blocks of React apps?",
//       answer: "Components",
//     },
//     {
//       id: 8832,
//       question:
//         "What's the name of the syntax we use to describe a UI in React?",
//       answer: "JSX",
//     },
//     {
//       id: 1297,
//       question: "How to pass data from parent to child components?",
//       answer: "Props",
//     },
//     {
//       id: 9103,
//       question: "How to give components memory?",
//       answer: "useState hook",
//     },
//     {
//       id: 2002,
//       question:
//         "What do we call an input element that is completely synchronised with state?",
//       answer: "Controlled element",
//     },
//   ]);

//   function handleSelect(id) {
//     let newArray = questions.map((q) =>
//       q.id !== id
//         ? { ...q, selected: false }
//         : q.selected === false
//         ? { ...q, selected: true }
//         : { ...q, selected: false }
//     );
//     setQuestions(newArray);
//   }

//   return (
//     <div className="App">
//       <FlashCards questions={questions} handleSelect={handleSelect} />
//     </div>
//   );
// }

// function FlashCards({ questions, handleSelect }) {
//   return (
//     <div className="flashcards">
//       {questions.map((question) => (
//         <div
//           key={question.id}
//           onClick={() => handleSelect(question.id)}
//           className={question.selected ? "selected" : ""}
//         >
//           {question.selected ? question.answer : question.question}
//         </div>
//       ))}
//     </div>
//   );
// }

export default function App() {
  const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 8832,
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];

  return (
    <div className="App">
      <FlashCards questions={questions} />
    </div>
  );
}

function FlashCards({ questions }) {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectId(id) {
    id === selectedId ? setSelectedId(null) : setSelectedId(id);
  }
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          className={selectedId === q.id ? "selected" : ""}
          onClick={() => handleSelectId(q.id)}
        >
          {selectedId === q.id ? q.answer : q.question}
        </div>
      ))}
    </div>
  );
}
