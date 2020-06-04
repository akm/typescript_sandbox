import React, {FC} from 'react';
import Picker, { PickerProps } from './Picker';
import Posts from '../containers/Posts';

export type AppProps = {
    subreddit: string;
    lastUpdatedAt?: Date;
    isLoading: boolean;
    onRefreshClick: () => void;
    onChangeSubreddit: PickerProps['onChange'];
}

const App: FC<AppProps> = ({
    subreddit,
    lastUpdatedAt,
    isLoading,
    onRefreshClick,
    onChangeSubreddit,
}) => (
    <div>
        <Picker subreddit={subreddit} options={[ 'reactjs', 'frontend' ]} onChange={onChangeSubreddit} />
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
