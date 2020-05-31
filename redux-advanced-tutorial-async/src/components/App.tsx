import React from 'react';
import Picker from './Picker';
import Posts from '../containers/Posts';

function App() {
    return (
        <div>
            <Picker />
            <p>
                <span>
                    Last updated at {new Date("2020-05-31 13:32:54").toLocaleTimeString()}.
                    {' '}
                </span>

                <button >
                    Refresh
                </button>
            </p>

            <div style={{ opacity: 1 }}>
                <Posts />
            </div >

        </div >
    );
}

export default App;
