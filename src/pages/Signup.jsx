import { useNavigate } from "react-router-dom";
import SignupForm from "../features/authentication/SignupForm";

function Signup() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#111827] h-screen grid content-center justify-center gap-2 text-white">
      <h4 className="text-center font-semibold leading-normal text-[1.5rem] uppercase mb-2">Create a new account</h4>
      <SignupForm />
      <p className="text-center mt-2">Have an Account <span 
      onClick={() => navigate('/login')}
      className="underline ml-1 text-blue-300 font-semibold text-[1rem] cursor-pointer">LOGIN </span></p>
    </div>
  );
}

export default Signup;
