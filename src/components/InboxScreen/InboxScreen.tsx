import React, { useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";

export default function InboxScreen() {
  const [tasks, setTasks] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);

    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?userId=1"
      );

      if (!response.ok) {
        setError("error");
        return;
      }

      const data = await response.json();
      const result = data.map(
        (task: { id: string; title: string; completed: boolean }) => ({
          id: `${task.id}`,
          title: task.title,
          state: task.completed ? "TASK_ARCHIVED" : "TASK_INBOX",
        })
      );

      setTasks(result);
      setLoading(false);
    };

    fetchTasks();
  }, []);

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      {tasks && (
        <TaskList
          tasks={tasks}
          loading={loading}
          onPinTask={() => {}}
          onArchiveTask={() => {}}
        />
      )}
    </div>
  );
}
