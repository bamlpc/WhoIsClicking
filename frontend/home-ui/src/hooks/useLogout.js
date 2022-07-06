import axiosPrivate from "../api/axios.js";
import useAuth from "./useAuth.js";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const _response = await axiosPrivate('/user/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout