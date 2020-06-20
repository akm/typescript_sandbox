import React from 'react';
import { action } from '@storybook/addon-actions';
import Todo from './Todo'

export default {
    component: Todo,
    title: 'Todo',
};

export const InProgress = () => <Todo completed={false} text="In Progress" onClick={action('clicked')} />
export const Completed = () => <Todo completed={true} text="Completed" onClick={action('clicked')} />
