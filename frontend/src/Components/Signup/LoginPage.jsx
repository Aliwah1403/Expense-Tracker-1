import googleLogo from "../../images/google.png";
import facebookLogo from "../../images/facebook.png";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Loader from "../Loader/Loader";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loginType, setLoginType] = useState("login");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleLoginType = () => {
    setLoginType(loginType === "login" ? "signup" : "login");
  };

  return (
    <>
      {isLoading && <Loader></Loader>}

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-5 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            {loginType === "signup" && (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-4 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="block w-full rounded-md border-0 py-3 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-4 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-3 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-4 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={passwordVisibility ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-3 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <i
                  className="absolute flex justify-center items-center top-0 right-0 h-full px-2 opacity-70 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisibility ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </i>
              </div>
              {loginType === "login" && (
                <div className="text-sm mt-3 flex justify-end">
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-600"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loginType === "signup" ? "Sign Up" : "Log In"}
              </button>
            </div>

            <div className="text-center text-red-500">{error}</div>

            <div className="relative h-[1px] w-full bg-slate-400 mx-0"></div>

            <div className="flex gap-4">
              <button className="relative h-11 w-1/2 font-semibold p-4 rounded-lg text-xs tracking-[0.5px] cursor-pointer outline-0 border-0 bg-white">
                <img
                  src={googleLogo}
                  alt="google-logo"
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 object-cover"
                />
                <span className="font-medium text-slate-900 opacity-80 ml-5 capitalize whitespace-nowrap">
                  Continue with google
                </span>
              </button>

              <button className="relative h-11 w-1/2 font-semibold p-4 rounded-lg text-xs tracking-[0.5px] cursor-pointer outline-0 border-0 bg-[#0171d3] text-white">
                <img
                  src={facebookLogo}
                  alt="facebook-logo"
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 bg-white rounded-full flex justify-center items-center"
                />
                <span className="capitalize ml-5 whitespace-nowrap">
                  continue with facebook
                </span>
              </button>
            </div>
          </form>

          {loginType === "login" ? (
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                onClick={toggleLoginType}
              >
                Create an account
              </a>
            </p>
          ) : (
            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                onClick={toggleLoginType}
              >
                Log in to your account
              </a>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
