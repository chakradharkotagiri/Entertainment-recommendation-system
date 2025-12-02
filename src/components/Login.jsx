import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    // dummy submit
    console.log("Login data:", data);
    // simulate a small delay
    await new Promise((res) => setTimeout(res, 500));
    // navigate to home (or dashboard) after "login"
    navigate("/");
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-[#17092d] from-5% to-[#0b061d] to-30% p-4">
      <form
        className="text-xl border-2 border-solid rounded-lg text-white p-4 w-[360px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="flex justify-center mb-4 text-3xl font-bold">
          Login
        </h1>

        <div className="flex flex-col gap-2">
          <div>
            <label className="block mb-1">Email</label>
            <input
              placeholder="you@gmail.com"
              className="w-full h-9 px-2 text-sm placeholder:text-sm placeholder:font-medium bg-slate-100 text-black border-2 border-black rounded-md"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message:
                    "Please enter a valid Gmail address ending with @gmail.com",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-700 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-9 px-2 text-sm placeholder:text-sm placeholder:font-medium bg-slate-100 text-black border-2 border-black rounded-md"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Minimum length is 5",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-700 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* optional remember me */}
          <div className="flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4"
              {...register("rememberMe")}
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>

          <button
            className="w-full bg-[#1A1A1A] border-2 text-lg border-black mt-3 rounded-md px-4 py-2 cursor-pointer disabled:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          {/* dummy "forgot password" link */}
          <p className="mt-2 text-xs text-center text-gray-300 cursor-pointer hover:underline">
            Forgot your password?
          </p>

          <p className="mt-2 text-sm text-center">
            Don&apos;t have an account?{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Signup here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
