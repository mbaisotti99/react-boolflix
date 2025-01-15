import { createContext, useContext, useState } from "react";


const GlobalContext = createContext()


const GlobalContextProvider = ({children}) =>{
    const [moviesArr, setMoviesArr] = useState([])
    const [tvArr, setTvArr] = useState([])
    
    const contextValue = {
        moviesArr,
        setMoviesArr,
        tvArr,
        setTvArr
    }

    return(
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export {GlobalContextProvider, useGlobalContext}