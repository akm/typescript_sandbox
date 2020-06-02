import React, {FC} from 'react'

export type PickerProps = {
    subreddit: string;
    options: string[];
}

const Picker: FC<PickerProps> = ({
    subreddit,
    options,
}) => (
    <span>
        <h1>{ subreddit }</h1>
        <select value={ subreddit }>
            { options.map(opt =>
                <option value={opt} key={opt}>{opt}</option>
            )}
        </select>
    </span>
)

export default Picker
