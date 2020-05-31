import React from 'react';

import AppComponent from '../components/App'

const App = () => (
    <AppComponent
        subreddit="reduxjs"
        isLoading={false}
        lastUpdatedAt={new Date("2020-05-31 13:32:54")} />
)

export default App
