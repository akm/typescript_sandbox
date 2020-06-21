import React from 'react';
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Footer from './Footer'

storiesOf('Footer', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .addDecorator(withA11y)
    .add('default', () => <Footer />)
