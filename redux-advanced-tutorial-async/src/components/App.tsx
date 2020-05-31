import React from 'react';
import Picker from './Picker';
import Posts from '../containers/Posts';

type AppProps = {
    subreddit: string;
    lastUpdatedAt?: Date;
    isLoading: boolean;
}

const App = (props: AppProps) => (
    <div>
        <Picker />
        <p>
            {props.lastUpdatedAt &&
                <span>
                    Last updated at {props.lastUpdatedAt.toLocaleTimeString()}.
                 {' '}
                </span>
            }

            {!props.isLoading &&
                <button>
                    Refresh
             </button>
            }
        </p>

        <div style={{ opacity: 1 }}>
            <Posts />
        </div >

    </div >
);

export default App;
