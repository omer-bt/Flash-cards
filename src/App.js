import React, { useState, useRef } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";
import stateExam from "./stateExam.json";
function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);
  const [categories, setCategories] = useState(SAMPLE_FLASHCARDS);
  const catagoryEl = useRef();
  const amountEl = useRef();

  function handeleSubmit(e) {
    e.preventDeafault();
  }
  let number = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <>
      <form className="header" onSubmit={handeleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Catagory </label>
          <select id="category" ref={catagoryEl}>
            {/* {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.category}
                </option>
              );
            })} */}
            {number.map((num) => {
              return (
                <option value={num} key={num}>
                  {num}
                </option>
              );
            })}
          </select>
          {(varr) => {
            var e = document.getElementById("category");
            var value = e.value;
            var text = e.options[e.selectedIndex].text;
            console.log(value);
          }}
        </div>
        <div className="form-group">
          <label htmlFor="category">Number of Questions </label>
          <input
            type={"number"}
            id="amount"
            min="1"
            max="10"
            step="1"
            defaultValue={10}
            ref={amountEl}
          />
        </div>

        <div>
          <button className="btn">Generate</button>
        </div>
      </form>

      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}
const SAMPLE_FLASHCARDS = stateExam;
const result = JSON.stringify(stateExam, null, 2);
console.log(result);
export default App;
