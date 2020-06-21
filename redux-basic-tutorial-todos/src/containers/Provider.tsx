import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { AppStore } from '../store'

type ProviderWrapperProps = {
    store: AppStore;
    children: React.ReactElement;
}

const ProviderWrapper: FC<ProviderWrapperProps> = ({ store, children }) => (
    <Provider store={store}>
        {children}
    </Provider>
)

export default ProviderWrapper
