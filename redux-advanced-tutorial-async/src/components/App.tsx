import React, {FC} from 'react';
import Picker from './Picker';
import Posts from '../containers/Posts';

export type AppProps = {
    subreddit: string;
    lastUpdatedAt?: Date;
    isLoading: boolean;
}

const App: FC<AppProps> = ({
    subreddit,
    lastUpdatedAt,
    isLoading,    
}) => (
    <div>
        <Picker />
        <p>
            {lastUpdatedAt &&
             <span>
                 Last updated at {lastUpdatedAt.toLocaleTimeString()}.
                 {' '}
             </span>
            }
            {!isLoading &&
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
