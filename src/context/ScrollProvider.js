import { createContext, useState, useEffect} from "react";

const ScrollContext = createContext({});

export const ScrollProvider = ({children}) => {
    const [scroll, setScroll] = useState("transparent");

    return(
        <ScrollContext.Provider value = {{scroll, setScroll}}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollContext