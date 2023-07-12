import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            Step {step}: {messages[step - 1]}
          </div>
          <div className="buttons">
            <button
              onClick={() => setStep((s) => s - 1)}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              disabled={step === 1 ? true : false}
            >
              Previous
            </button>
            <button
              onClick={() => setStep((s) => s + 1)}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              disabled={step === 3 ? true : false}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
