import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import Todo from './Todo'

export default {
    component: Todo,
    title: 'Todo',
    decorators: [withKnobs],
};

export const InProgress = () => <Todo completed={boolean('completed', false)} text={text('text', 'In Progress')} onClick={action('clicked')} />
export const Completed = () => <Todo completed={boolean('completed', true)} text={text('text', 'Completed')} onClick={action('clicked')} />
