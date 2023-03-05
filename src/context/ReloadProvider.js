import { createContext, useState, useEffect} from "react";

const ReloadContext = createContext({});

export const ReloadProvider = ({children}) => {
    const [reload, setReload] = useState(false);

    return(
        <ReloadContext.Provider value = {{reload, setReload}}>
            {children}
        </ReloadContext.Provider>
    )
}

export default ReloadContext