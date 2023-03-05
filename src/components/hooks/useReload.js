import { useContext } from "react";
import ReloadContext from "../../context/ReloadProvider";

const useReload = () => {
    return useContext(ReloadContext);
}

export default useReload