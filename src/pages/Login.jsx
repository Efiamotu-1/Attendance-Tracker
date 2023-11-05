import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className="bg-[#111827] h-screen grid content-center justify-center gap-2 text-white">
      <h4 className="text-center font-semibold leading-normal text-[1.5rem]">Log in to your account</h4>
      <LoginForm />
    </div>
  );
}

export default Login;
