import { useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import Button from "../../ui/Button";

function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = false;

  function handleSubmit() {

  }

  return (
    <form onSubmit={handleSubmit} className="px-5 py-7 mx-5 md:px-10 border border-solid border-[#1f2937] bg-[#18212f] rounded-lg text-base text-white">
      <div className="flex flex-col gap-3.5">
        <label className="font-medium">Full Name</label>
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="text"
          id="name"
          // This makes this form better for password managers
          autoComplete="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col gap-3.5 py-5">
        <label className="font-medium">Email address</label>
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col gap-3.5">
        <label className="font-medium">Password</label>
        <input
          className="border border-solid border-[#4b5563] bg-[#18212f] py-2 px-4 shadow-sm rounded-lg"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col gap-3.5 pt-5">
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Sign Up" : <SpinnerMini />}
        </Button >
      </div>
    </form>
  );
}

export default SignupForm;

