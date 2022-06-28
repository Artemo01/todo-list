import React from 'react';

import './TaskList.css';

interface ITaskList {
  tasks: any;
  checkTask: (id: any) => void;
}

function TaskList({ tasks, checkTask }: ITaskList) {
  return (
    <div className="tasks-list-container">
      {tasks.map((t: any) => {
        return (
          <div className="task-conteiner" key={t.id}>
            <div className="task-name">{t.name}</div>
            <div className="task-checkbox-container">
              <input
                className="task-checkbox"
                type="checkbox"
                checked={t.completed}
                onChange={() => checkTask(t.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
