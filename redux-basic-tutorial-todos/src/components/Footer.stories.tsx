import React from 'react';
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react';

import Footer from './Footer'

storiesOf('Footer', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => <Footer />)
