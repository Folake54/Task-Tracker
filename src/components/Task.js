import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}{" "}
        {[faTimes].map((icon) => (
          <FontAwesomeIcon
            icon={icon}
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        ))}
      </h3>
      <p> {task.day}</p>
    </div>
  );
};

export default Task;
