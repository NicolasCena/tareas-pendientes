import { FC } from "react";

type TaskButtonProps = {
  onClick: () => void;
  buttonText: string;
  divClassName?: string;
  buttonClassName?: string;
  icon?: string;
};

const TaskButton: FC<TaskButtonProps> = ({
  onClick,
  buttonText,
  divClassName,
  buttonClassName,
  icon,
}) => {
  return (
    <div className={divClassName}>
      <button type="button" onClick={onClick} className={buttonClassName}>
        {icon && <i className={icon} />}
        {buttonText}
      </button>
    </div>
  );
};

export default TaskButton;
