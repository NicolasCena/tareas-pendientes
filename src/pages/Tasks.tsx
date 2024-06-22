import useTasks from "../hooks/useTasks";
import { Error } from "../components/Error";
import { TaskCard } from "../components/Task";
import TaskButton from "../components/Task/TaskButton";

const Tasks = () => {
  const { loading, tasks, error } = useTasks();

  if (loading) return <div>Loading...</div>;
  if (error) return <Error />;

  return (
    <div>
      {Array.isArray(tasks) && tasks.length > 0 && tasks.map((task, index) => (
        <TaskCard key={index} task={task} >
          <TaskButton onClick={() => {}} buttonText="Enviar" />
          <TaskCard.Description  text="Prueba descripcion"/>
        </TaskCard>
      ))}
    </div>
  );
};

export default Tasks;
