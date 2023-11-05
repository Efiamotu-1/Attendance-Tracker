import SignupForm from "../features/authentication/SignupForm";

function Signup() {
  return (
    <div className="bg-[#111827] h-screen grid content-center justify-center gap-2 text-white">
      <h4 className="text-center font-semibold leading-normal text-[1.5rem]">Create a new account</h4>
      <SignupForm />
    </div>
  );
}

export default Signup;
