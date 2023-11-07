import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
const navigate = useNavigate()

    const {mutate: signup, isLoading} = useMutation({
        mutationFn: ({name, email, password}) => signupAPI({name, email, password}),
        onSuccess: (user) => {
            navigate('/dashboard', { replace: true });
            localStorage.setItem("user",JSON.stringify(user))
            
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })

    return {signup, isLoading}
}