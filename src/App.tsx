import React, { useRef, useState } from 'react';

import './App.css';
import TaskList from './components/TaskList';

function App() {
  const [tasksToDo, setTasksToDo] = useState<any>([]);
  const [taskId, setTaskId] = useState(1);
  const taskName = useRef<any>(null);

  const AddNewTask = () => {
    if (taskName?.current?.value !== '') {
      setTasksToDo([
        ...tasksToDo,
        { id: taskId, name: taskName?.current?.value, completed: false },
      ]);
      setTaskId(taskId + 1);
      taskName.current.value = null;
    } else {
      alert('you cannot add an empty task');
    }
  };

  const checkTask = (id: any) => {
    const newToDoList = [...tasksToDo];
    const todo = newToDoList.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTasksToDo(newToDoList);
  };

  const removeTask = () => {
    const newToDoList = tasksToDo.filter((t: any) => !t.completed);
    setTasksToDo(newToDoList);
  };

  return (
    // <Main
    //   taskName={taskName}
    //   AddNewTask={AddNewTask}
    //   removeTask={removeTask}
    //   tasksToDo={tasksToDo}
    //   checkTask={checkTask}
    // />
    <div className="main-container">
      <div className="title">My Tasks</div>
      <div className="options-bar">
        <input
          className="input-text"
          ref={taskName}
          type="text"
          placeholder="Task Name"
        />
        <button
          className="add-task-btn"
          onClick={() => {
            AddNewTask();
          }}
        >
          Add
        </button>
        <button className="remove-task-btn" onClick={removeTask}>
          Remove
        </button>
      </div>
      <TaskList tasks={tasksToDo} checkTask={checkTask} />
    </div>
  );
}

export default App;
