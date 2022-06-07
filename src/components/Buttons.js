import PropTypes from "prop-types";
import React from "react";

const Buttons = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn">
      {text}
    </button>
  );
};

Buttons.defaultProps = {
  color: "steelblue",
};

Buttons.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Buttons;
