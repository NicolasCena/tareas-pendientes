import { FC } from "react";

type Item = {
  pClassName?: string;
  text: string;
  divClassName?: string;
};

type TaskDescriptionProps = {
  items: Item[] | Item;
};

const TaskDescription: FC<TaskDescriptionProps> = ({ items }) => {
  const renderItem = (item: Item, index: number) => (
    <div key={index} className={item.divClassName}>
      <p className={item.pClassName}>{item.text}</p>
    </div>
  );

  return (
    <>
      {Array.isArray(items)
        ? items.map((item, index) => renderItem(item, index))
        : renderItem(items, 0)}
    </>
  );
};

export default TaskDescription;
