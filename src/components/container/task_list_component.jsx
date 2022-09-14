import React, { PropTypes, useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/TaskForm";
import TaskComponent from "../pure/TaskComponent";

const TaskListComponent = (task) => {
  const defaultTask1 = new Task("Example", "Rebel, rebel", true, LEVELS.NORMAL);
  const defaultTask2 = new Task(
    "Other example",
    "Ay, mamá",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "More examples",
    "Un veneno",
    false,
    LEVELS.BLOCKING
  );

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida con useEffects()

  useEffect(() => {
    console.log("Cuando se modifican las tasks se actualiza el componente");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("Tasklist component va a willUnmount");
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete this task:", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    // We update the state of the component (using the copy of the list temptask) so it will update the task to show it updated
    setTasks(tempTask);
  }

  function removeTask(task) {
    console.log("Delete this task:", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  function addTask(task) {
    console.log("Add this task:", task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  //renderizado condicional de la table

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={removeTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let tasksTable;
  if (tasks.length > 0) {
    tasksTable = <Table />;
  } else {
    tasksTable = (
      <div>
        <h2>No tasks to show</h2>
        <p>Let´s create your first task!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your tasks</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            {loading ? (<p>Loading...</p>) : tasksTable}
          </div>
        </div>
      </div>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
