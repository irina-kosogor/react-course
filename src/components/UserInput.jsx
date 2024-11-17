import { useState } from "react";

function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestemnt: 0,
    annualInvestemnt: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInputChange() {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">INITIAL INVESTMENT</label>
          <input type="number" required value={userInput.initialInvestemnt} />
        </p>
        <p>
          <label htmlFor="">ANNUAL INVESTMENT</label>
          <input type="number" required value={userInput.annualInvestemnt} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="number" required value={userInput.expectedReturn} />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number" required value={userInput.duration} />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
