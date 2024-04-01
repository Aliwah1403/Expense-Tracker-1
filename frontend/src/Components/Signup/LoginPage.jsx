import googleLogo from "../../images/google.png";
import facebookLogo from "../../images/facebook.png";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const LoginPage = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
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
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
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
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                  className="absolute top-0 right-0 h-full px-2 opacity-70"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisibility ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
              <div className="text-sm mt-4 flex justify-end">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>

            <div className="relative h-[1px] w-full bg-slate-400 mx-0">
              {/* <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-0 px-4 bg-white">
                OR
              </span> */}
            </div>

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
                  Signup with facebook
                </span>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
