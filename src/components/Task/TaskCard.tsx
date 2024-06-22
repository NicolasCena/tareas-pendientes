import { createContext } from "react";
import { Task, TaskContextProps } from "../../types/Task.type";

export const TaskContext = createContext({} as TaskContextProps);

export const TaskCard = ({
  children,
  task,
}: {
  children: JSX.Element | JSX.Element[];
  task: Task;
}) => {
  const { Provider } = TaskContext;

  return (
    <Provider value={{ task }}>
      <div className="task">{children}</div>
    </Provider>
  );
};
