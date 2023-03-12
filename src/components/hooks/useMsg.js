import { useContext } from "react";
import MsgContext from "../../context/MsgProvider";

const useMsg = () => {
    return useContext(MsgContext);
}
export default useMsg