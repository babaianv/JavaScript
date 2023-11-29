import React, { ChangeEvent, useState } from "react";
import ToDo from "./ToDo";
import JsonTodos from "./JsonTodos";

//rafce or // rce(классовый)

interface ITask {
  name: string;
  completed: boolean;
}

const ToDoList: React.FC = (): JSX.Element => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [task, setTask] = useState<ITask>({ name: "", completed: false });
  const [check, setChecked] = useState<boolean>(false);

  const handleAddTask = () => {
    setTaskList((prev) => [...prev, task]);
    setTask({ name: "", completed: false });
  };

  const handleChangeTask = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask({
      name: e.target.value,
      completed: false,
    });
  };

  const handleRemoveTask = (index: number): void => {
    const taskListCopy: ITask[] = [...taskList];
    taskListCopy.splice(index, 1);
    setTaskList(taskListCopy);
  };

  const handleIsDone = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    const taskListCopy: ITask[] = [...taskList];

    // const index = taskListCopy.findIndex(task => task.name === )
  };

  return (
    <div className="container">
      <h1>ToDoList App</h1>
      <input
        className="form-control"
        style={{display:'inline', width:'65%'}}
        type="text"
        placeholder="Enter a task..."
        onChange={(e) => handleChangeTask(e)}
        value={task.name}
      />

      <button style={{marginBottom: '5px'}} className="btn btn-primary" onClick={handleAddTask}>Add task</button>
      <ol className="task-list">
        {taskList.map((t, i) => (
          <ToDo
            taskName={t.name}
            index={i}
            done={check}
            remove={handleRemoveTask}
            isDone={handleIsDone}
          />
        ))}
      </ol>
            <JsonTodos />

    </div>
  );
};

export default ToDoList;
