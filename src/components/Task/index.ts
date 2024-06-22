import { TaskCard as TaskCardHOC } from "./TaskCard";
import TaskButton from "./TaskButton";
import TaskDescription from "./TaskDescription";

export const TaskCard = Object.assign(TaskCardHOC, {
  Description: TaskDescription,
  Button: TaskButton,
});

export default TaskCard;
