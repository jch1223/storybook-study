import InboxScreen from "./InboxScreen";
import { rest } from "msw";
import { ComponentStory } from "@storybook/react";
import * as TaskStories from "../Task/Task.stories";

export default {
  component: InboxScreen,
  title: "InboxScreen",
};

const Template: ComponentStory<typeof InboxScreen> = () => <InboxScreen />;

const MockedState = {
  tasks: [
    { ...TaskStories.Default.args?.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args?.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args?.task, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args?.task, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args?.task, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args?.task, id: "6", title: "Task 6" },
  ],
  status: "idle",
  error: null,
};

export const Default: ComponentStory<typeof InboxScreen> = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1",
        (req, res, ctx) => {
          return res(ctx.json(MockedState.tasks));
        }
      ),
    ],
  },
};

export const Error: ComponentStory<typeof InboxScreen> = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1",
        (req, res, ctx) => {
          return res(ctx.status(403));
        }
      ),
    ],
  },
};
