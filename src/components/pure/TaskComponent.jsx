import React, { useEffect } from "react";
import { Task } from "../../models/task.class";
import PropTypes from "prop-types";
import { LEVELS } from "../../models/levels.enum";
import "../../styles/task.scss";

const TaskComponent = ({ task, complete, remove}) => {
  useEffect(() => {
    console.log("Tarea creada");

    return () => {
      console.log(`Task ${task.name} is going to unmount`);
    };
  }, [task]);

   // returns color badges depending on taks level 
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );

      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );

      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }

 // Returns icon on/off depending of task status  
  function taskIconCompleted() {
    if (task.completed) {
      return <i onClick={() => complete(task)} className="bi-toggle-on task-action" style={{ color: "green" }}></i>;
    } else {
      return <i onClick={() => complete(task)} className="bi-toggle-off task-action" style={{ color: "grey" }}></i>;
    }
  }

  const taskCompleted = {
    backgroundColor: '#fff',
    color: '#ADAABF',
    textDecoration: 'line-through',
    fontWeigth: 'bold'
  }

  const taskPending = {
    backgroundColor: '#fff',
    color: '#FF595E',
    textDecoration: 'lineThrough',
    fontWeigth: 'bold'
  }



  return (
    <tr className="fw-normal" style={task.completed ? taskCompleted : taskPending}>
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
      {taskLevelBadge()}
      </td>
      <td className="align-middle">
    {taskIconCompleted()}
        <i className="bi-trash task-action" style={{ color: "tomato" }} onClick={() => remove(task)}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}


export default TaskComponent;
  