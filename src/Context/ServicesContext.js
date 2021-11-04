import React, { useState } from 'react'

const Context = React.createContext({});

export function ServicesContextProvider({ children }) {
    const [services, setServices] = useState([]);

    return <Context.Provider value={{services, setServices}}>
        { children }
    </Context.Provider>
}

export default Context;
