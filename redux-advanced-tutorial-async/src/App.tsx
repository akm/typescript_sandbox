import React from 'react';

function App() {
    return (
        <div>
            <span>
                <h1>reactjs</h1>
                <select value="reactjs">
                    <option value="reactjs" key="reactjs">reactjs</option>
                    <option value="frontend" key="frontend">frontend</option>
                </select>
            </span>

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
                <ul>
                    <li key="0">foo</li>
                    <li key="1">bar</li>
                    <li key="2">baz</li>
                </ul >
            </div >

        </div >
    );
}

export default App;
