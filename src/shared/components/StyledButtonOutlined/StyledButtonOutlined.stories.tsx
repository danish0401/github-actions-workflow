/* istanbul ignore file */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StyledButtonOutlined } from 'shared/components/StyledButtonOutlined/StyledButtonOutlined';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/StyledButtonOutlined',
  component: StyledButtonOutlined,
} as ComponentMeta<typeof StyledButtonOutlined>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StyledButtonOutlined> = (args) => <StyledButtonOutlined {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Click me!',
};
