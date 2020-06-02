import React, {FC} from 'react'

export type PickerProps = {
    subreddit: string;
    options: string[];
    onChange: (val: string) => void;
}

const Picker: FC<PickerProps> = ({
    subreddit,
    options,
    onChange,
}) => (
    <span>
        <h1>{ subreddit }</h1>
        <select value={ subreddit } onChange={e => onChange(e.target.value)} >
            { options.map(opt =>
                <option value={opt} key={opt}>{opt}</option>
              )}
        </select>
    </span>
)

export default Picker
