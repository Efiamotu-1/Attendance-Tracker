import { useNavigate } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#111827] h-screen grid content-center justify-center gap-2 text-white">
      <h4 className="text-center font-semibold leading-normal text-[1.5rem]">Log in to your account</h4>
      <LoginForm />
      <p className="text-center mt-2">Don't have an Account <span 
      onClick={() => navigate('/signup')}
      className="underline ml-1 text-blue-300 font-semibold text-[1rem] cursor-pointer">SIGN UP</span></p>
    </div>
  );
}

export default Login;
