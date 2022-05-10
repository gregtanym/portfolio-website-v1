import React, {useContext, useState} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [sidebar, setSidebar] = useState(false)

    return(
        <AppContext.Provider value={
            {
                sidebar,
                setSidebar
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

// custom hook
export const useGlobalContext = () => useContext(AppContext)

export {AppContext, AppProvider}
