// See https://alligator.io/react/storybook-with-redux/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import AddTodo, { PureAddTodo } from './AddTodo'
import Provider from './Provider'

import { createRootStore } from '../store'

const store = createRootStore()

storiesOf('AddTodo', module)
    .add('pure', () => <PureAddTodo onSubmit={action('submitted')} />)
    .addDecorator(story => (
        <Provider store={store}>
            {story()}
        </Provider>
    ))
    .add('default', () => <AddTodo />)
