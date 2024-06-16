import { createContext } from "react";
import useTasks from "../../hooks/useTasks";
import { Error } from "../Error";

const Task = ({ children }: { children: JSX.Element }) => {
  const { loading, tasks, error } = useTasks();
  const TaskContext = createContext({});
  const { Provider } = TaskContext;

  if (loading) return <div>Loading...</div>;
  if (typeof error !== null) return <Error />;

  return (
    <Provider value={tasks}>
      <div className="task">{children}</div>
    </Provider>
  );
};

export default Task;
