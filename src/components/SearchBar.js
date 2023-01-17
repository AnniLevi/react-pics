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

/*
Handling text inputs
1. create a new piece of state
2. create and event handler to watch for the 'onChange' event
3. when the 'onChange' event fires, get the value from the input (event.target.value)
4. take that value from the input and use it to update your state
5. pass your state to the input as the value prop

Inputs managed in this style (where both the value and onChange props are provided) are called 'controlled inputs'
*/

/*
Why is it necessary?
We steal control of the input value from the browser,
and put the input value under the control of the State System.
We can now manage the current value inside the inputs and change its value using the State System.
- need to read the value of the input - look at the peace of state (here 'term')
- need to update the value of the input - call setter (here 'setTerm')
- component re-renders with every keypress - we can add more advanced features now
 */
