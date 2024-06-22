import useTasks from "../hooks/useTasks";
import { Error } from "../components/Error";
import { TaskCard } from "../components/Task/TaskCard";
import TaskButton from "../components/Task/TaskButton";
import TaskDescription from "../components/Task/TaskDescription";

const Tasks = () => {
  const { loading, tasks, error } = useTasks();

  if (loading) return <div>Loading...</div>;
  if (error) return <Error />;

  return (
    <div>
      {Array.isArray(tasks) && tasks.length > 0 && tasks.map((task, index) => (
        <TaskCard key={index} task={task} >
          <TaskButton onClick={() => {}} buttonText="Enviar" />
          <TaskDescription  text="Prueba descripcion"/>
        </TaskCard>
      ))}
    </div>
  );
};

export default Tasks;
