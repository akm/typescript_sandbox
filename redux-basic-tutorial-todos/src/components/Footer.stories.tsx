import React from 'react';
import { MemoryRouter } from 'react-router'
import { storiesOf, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Footer from './Footer'

addParameters({
    backgrounds: [
        { name: 'twitter', value: '#00aced', default: true },
        { name: 'facebook', value: '#3b5998' },
    ],
});

storiesOf('Footer', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .addDecorator(withA11y)
    .add('default', () => <Footer />)
