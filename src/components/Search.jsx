import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../assets/css/search.css'; 

const Search = ({ sendKeyboard }) => {
  const [keyboard, setKeyboard] = useState("");

 
  useEffect(() => {
    if (!keyboard) return; 

    const delayTime = setTimeout(() => {
      sendKeyboard(keyboard);
    }, 500); 

    return () => clearTimeout(delayTime); 
  }, [keyboard, sendKeyboard]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!keyboard) {
      Swal.fire({
        title: "Fill the input",
        icon: "warning",
        draggable: true,
      });
    } else {
      sendKeyboard(keyboard);
      setKeyboard(""); 
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch(e); 
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="col-7">
        <form onSubmit={handleSearch} className="input-group mb-3">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Enter username"
            value={keyboard}
            onChange={(e) => setKeyboard(e.target.value)} 
            onKeyDown={handleKeyDown} 
          />
          <button
            type="submit"
            className="btn search-btn"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
