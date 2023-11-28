import { useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import {HiEye,HiEyeSlash } from 'react-icons/hi2'

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const {login, isLoading} = useLogin()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) return;
      login({email, password}, {
        onError: () => {
          setEmail('')
          setPassword('')
        }
      })
  }

  function handleShowClick() {
    setShowPassword(prev => !prev)
  }

  return (
    <form onSubmit={handleSubmit} className="px-5 py-7 mx-5 md:px-10 border border-solid border-[#1f2937] bg-[#18212f] rounded-lg text-base text-white">
      <div className="flex flex-col gap-3.5">
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
      <div className="flex flex-col gap-3.5 py-5">
        <label className="font-medium">Password</label>
        <div className="flex items-center border border-solid border-[#4b5563] active:bg-none py-2 px-4 shadow-sm rounded-lg">
        <input
          className="bg-[#18212f] border-0 outline-0"
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          />
        {showPassword ? <div onClick={handleShowClick}><HiEye /></div> : <HiEyeSlash onClick={handleShowClick}/>}
        </div>
      </div>
      <div className="flex justify-center gap-3.5 py-1">
        <Button  disabled={isLoading} size="large">
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;

