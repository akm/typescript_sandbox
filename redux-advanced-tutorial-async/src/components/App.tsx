import React, {FC} from 'react';
import Picker from './Picker';
import Posts from '../containers/Posts';

export type AppProps = {
    subreddit: string;
    lastUpdatedAt?: Date;
    isLoading: boolean;
    onRefreshClick: () => void,
}

const App: FC<AppProps> = ({
    subreddit,
    lastUpdatedAt,
    isLoading,
    onRefreshClick,
}) => (
    <div>
        <Picker subreddit={subreddit} options={[ 'reactjs', 'frontend' ]}/>
        <p>
            {lastUpdatedAt &&
             <span>
                 Last updated at {lastUpdatedAt.toLocaleTimeString()}.
                 {' '}
             </span>
            }
            {!isLoading &&
             <button onClick={onRefreshClick}>
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
