import "../styles/SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  // const handleClick = () => {
  //   onSubmit('cars');
  // };

  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault(); // prevent the default form behavior (form input collection)

    // NEVER DO THIS
    // onSubmit(document.querySelector("input").value);

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      {/* listen for button click */}
      {/*<input />*/}
      {/*<button onClick={handleClick}>Click me</button>*/}

      {/*listen for Enter key press*/}
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
