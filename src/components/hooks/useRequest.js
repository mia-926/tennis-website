import { useContext } from "react";
import RequestContext from "../../context/RequestProvider";

const useRequest = () => {
    return useContext(RequestContext);
}

export default useRequest