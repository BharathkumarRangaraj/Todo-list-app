import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*const AddTask = (addTask) => {
  const [value, updateValue] = useState("");
};

 const handleSubmit= e=>{
  e.preventDefault();
  if (value !== ""){
    AddTask(value)
    updateValue("");
  }
}

return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={value}
      placeholder="enter your task"
      onChange={ e => updateValue(e.target.value)}
    />
    <button type="submit"><i class='meterial-icons'>add</i></button>
  </form>
)

*/
const ToDoList = () => {
  const addTask = (text) => updateValue([...tasks, { text }]);
  const [tasks, updateValue] = useState([
    {
      text: "wakeup",
      isCompleted: false,
    },
    {
      text: "freshup",
      isCompleted: false,
    },
    {
      text: "boostup",
      isCompleted: false,
    },
  ]);

  const toggletask = (index) => {
    const newtask = [...tasks];
    if (newtask[index].isCompleted) {
      newtask[index].isCompleted = false;
    } else {
      newtask[index].isCompleted = true;
      updateValue(newtask);
    }
  };

  const reomveTask = (index) => {
    const newtask = [...tasks];
    newtask.splice(index, 1);
    updateValue(newtask);
  };

  return (
    <div className="lists-of-tasks-todo">
      {tasks.map((task, index) => (
        <div className="task-status">
          <span
            onClick={() => toggletask(index)}
            className={
              task.isCompleted ? "task-name completed-task" : "task-name"
            }
          >
           
            {task.text}
          </span>
          <button onClick={() => reomveTask(index)}>
            <i class="meterial-icons">delete</i>
          </button>
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<ToDoList />, document.getElementById("root"));
