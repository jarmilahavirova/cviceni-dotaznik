import { QuestionBody } from "../QuestionBody/index";
import { Option } from "../Option/index";
import "./style.css";
import { useState } from "react";

export const Question = ({ text }) => {
  const [answer, setAnswer] = useState("symbolQuestion");

  const handleSelect = (iconType) => {
    setAnswer(iconType);
  };

  return (
    <div className="question">
      <QuestionBody iconType={answer} text={text} />
      <div className="question__options">
        <Option
          type="smileyStrongYes"
          text="Souhlasím"
          onSelected={handleSelect}
        />
        <Option
          type="smileyYes"
          text="Spíše souhlasím"
          onSelected={handleSelect}
        />
        <Option type="smileyNeutral" text="Nevím" onSelected={handleSelect} />
        <Option
          type="smileyNo"
          text="Spíše nesouhlasím"
          onSelected={handleSelect}
        />
        <Option
          type="smileyStrongNo"
          text="Nesouhlasím"
          onSelected={handleSelect}
        />
      </div>
    </div>
  );
};
