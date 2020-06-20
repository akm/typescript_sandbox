import React from 'react';
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react';

import FilterLink from './FilterLink'

storiesOf('FilterLink', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
    ))
    .add('default', () => <FilterLink filter="SHOW_ALL">All</FilterLink>)
    .add('completed', () => <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>)
    .add('active', () => <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>)
