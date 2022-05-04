import React from "react";
import Task, { TaskType } from "../Task/Task";

interface TaskListProps {
  loading: boolean;
  tasks: TaskType[];
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
}

export default function TaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: TaskListProps) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return (
      <div className="list-items" data-testid="loading">
        loading
      </div>
    );
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task: TaskType) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}
