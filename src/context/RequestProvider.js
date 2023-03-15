import { createContext, useState, useEffect} from "react";

const RequestContext = createContext({});

export const RequestProvider = ({children}) => {
    const [request, setRequest] = useState([]);

    return(
        <RequestContext.Provider value = {{request, setRequest}}>
            {children}
        </RequestContext.Provider>
    )
}

export default RequestProvider