import React, {useContext, useRef} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    return(
        <AppContext.Provider >
            {children}
        </AppContext.Provider>
    )
}

// custom hook
export const useGlobalContext = () => useContext(AppContext)

export {AppContext, AppProvider}
