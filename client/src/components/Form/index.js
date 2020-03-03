import React from "react";

function Form({ q, handleInputChange }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
    </form>
  );
}

export default Form;
