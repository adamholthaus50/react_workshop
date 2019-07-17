import React from "react";
import PropTypes from "prop-types";

const TextInput = props => {
  return (
    <div>
      <div>
        <label htmlFor={props.id}>{props.label}</label>
        <br />
        <input
          type="text"
          onChange={props.onChange}
          id={props.id}
          value={props.title}
        />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default TextInput;
