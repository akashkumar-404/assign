import React, { useState } from "react";

const Addheadtail = ({ handleItem }) => {
  const [currentOption, setCurrentOption] = useState("");

  const changeOption = (e) => {
    setCurrentOption(e);
  };
  const handlereload=() => {
    localStorage.clear();
}
  return (
    <>
      <form>
        <select
          value={currentOption}
          onChange={(event) => changeOption(event.target.value)}
        >
          <option value="">Select value</option>
          <option value="T">T</option>
          <option value="H">H</option>
        </select>
        <button
          onClick={(event) => {
            event.preventDefault();
            changeOption(event.target.value);
            console.log(currentOption);
            if (currentOption == "") {
              alert("please select value");
            } else {
              var oldValue = localStorage.getItem("test");
              oldValue = oldValue == null ? "" : oldValue;

              var final = oldValue + currentOption;
              localStorage.setItem("test", final);
              handleItem(final);
            }
          }}
        >
          SUBMIT
        </button>
       
      </form>
      
      <div> <button onClick={handlereload }>Clear</button></div>
    </>
  );
};

export default Addheadtail;
