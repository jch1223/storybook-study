import React from "react";

import TaskList from "./TaskList";
import * as TaskStories from "../Task/Task.stories";
import { ComponentStory, Meta } from "@storybook/react";
import { TaskType } from "../Task/Task";

export default {
  title: "TaskList",
  component: TaskList,
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {
      ...(TaskStories.Default.args?.task as TaskType),
      id: "1",
      title: "Task 1",
    },
    {
      ...(TaskStories.Default.args?.task as TaskType),
      id: "2",
      title: "Task 2",
    },
    {
      ...(TaskStories.Default.args?.task as TaskType),
      id: "3",
      title: "Task 3",
    },
    {
      ...(TaskStories.Default.args?.task as TaskType),
      id: "4",
      title: "Task 4",
    },
    {
      ...(TaskStories.Default.args?.task as TaskType),
      id: "5",
      title: "Task 5",
    },
    {
      ...(TaskStories.Default.args?.task as TaskType),
      id: "6",
      title: "Task 6",
    },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...(Default.args.tasks as TaskType[]).slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
