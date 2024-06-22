import { FC } from "react";

type TaskDescriptionProps = {
  pClassName?: string;
  text: string;
  divClassName?: string;
};

const TaskDescription: FC<TaskDescriptionProps> = ({
  pClassName,
  text,
  divClassName,
}) => {
  return (
    <>
      <div className={divClassName}>
        <p className={pClassName}>{text}</p>
      </div>
    </>
  );
};

export default TaskDescription;
