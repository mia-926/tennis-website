import { createContext, useState} from "react";

const MsgContext = createContext({});

export const MsgProvider = ({children}) => {
    const [msg, setMsg] = useState("");

    return(
        <MsgContext.Provider value = {{msg, setMsg}}>
            {children}
        </MsgContext.Provider>
    )
}

export default MsgContext