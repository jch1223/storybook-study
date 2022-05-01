import React from "react";

export interface TaskProps {
  task: {
    id: string;
    title: string;
    state: string;
    updatedAt: Date;
  };
}

export default function Task({ task: { id, title, state } }: TaskProps) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}
